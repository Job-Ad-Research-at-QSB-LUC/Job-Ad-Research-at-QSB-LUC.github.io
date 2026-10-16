/* Public aggregate replication. Run in the extracted package directory.
   Inputs are frozen occupation-level rankings, observed destination masses,
   and origin denominators. This does not refit task models or crosswalks. */
version 17
clear all
set more off
set type double
capture mkdir results
global OUT "results"
capture log close _all
log using "results/stata_validation.log", text replace
tempfile rankings alltruth allorigins
import delimited using "rankings.csv", varnames(1) stringcols(2 4) asdouble clear
isid dataset origin model rank
isid dataset origin model destination
bysort dataset origin model (rank): assert rank==_n
save `rankings'
import delimited using "observed.csv", varnames(1) stringcols(2 3) asdouble clear
isid dataset origin destination
save `alltruth'
import delimited using "origins.csv", varnames(1) stringcols(3) asdouble clear
isid dataset origin
save `allorigins'
* 4. Decide the common recommendation budget using list lengths ONLY.
use `rankings', clear
collapse (count) returned=rank, by(dataset origin model)
reshape wide returned, i(dataset origin) j(model) string
merge 1:1 dataset origin using `allorigins'
assert _merge!=1
replace returnedtask=0 if missing(returnedtask)
replace returnedonet_published=0 if missing(returnedonet_published)
drop _merge
gen double matched_k=min(20,returnedtask,returnedonet_published)
gen byte included=matched_k>0
tempfile budgets
save `budgets'
save "$OUT/list_budgets.dta", replace

* 5. Join each recommended destination to the benchmark and sum its contribution.
* A recommendation absent from observed transitions receives zero captured mass.
* This is not a claim that the transition is impossible.
use `rankings', clear
merge m:1 dataset origin using `budgets', keep(master match) nogen
assert !missing(matched_k)
merge m:1 dataset origin destination using `alltruth', keep(master match)
gen byte observed_match=_merge==3
replace mass=0 if _merge==1
drop _merge
gen byte selected_equal=rank<=matched_k
gen double captured_equal=mass*selected_equal
gen double captured_up20=mass
sort dataset origin model rank
save "$OUT/recommendation_audit.dta", replace
export delimited using "$OUT/recommendation_audit.csv", replace
collapse (sum) captured_equal captured_up20, by(dataset origin model)
reshape wide captured_equal captured_up20, i(dataset origin) j(model) string
merge 1:1 dataset origin using `budgets', nogen
foreach v of varlist captured_* {
 replace `v'=0 if missing(`v')
}
* Retain the older up-to-20 calculation as a diagnostic, not as the headline.
expand 2
bysort dataset origin: gen str12 mode=cond(_n==1,"equal_length","up_to_20")
gen double task=cond(mode=="equal_length",captured_equaltask,captured_up20task)/denominator
gen double onet_published=cond(mode=="equal_length",captured_equalonet_published,captured_up20onet_published)/denominator
gen double difference=task-onet_published
assert task>=0 & task<=1+1e-10
assert onet_published>=0 & onet_published<=1+1e-10
gen byte more=difference>1e-12
gen byte ties=abs(difference)<=1e-12
gen byte less=difference< -1e-12
assert more+ties+less==1
sort dataset mode origin
save "$OUT/by_origin.dta", replace
export delimited using "$OUT/by_origin.csv", replace

* 6. Headline aggregation: each ORIGIN has equal weight, not each transition.
* Keep ties in the denominator. Omit zero-common-length pairs in equal-length
* results only; save/report these exclusions explicitly.
gen byte use_origin=mode=="up_to_20" | included
preserve
 collapse (count) all_origins=included (sum) origins=use_origin, by(dataset mode)
 gen excluded_zero_length=all_origins-origins
 tempfile counts
 save `counts'
restore
keep if use_origin
collapse (mean) task onet_published difference mean_k=matched_k ///
 (min) min_k=matched_k (max) max_k=matched_k ///
 (sum) more ties less, by(dataset mode)
merge 1:1 dataset mode using `counts', assert(match) nogen
gen double share_more=more/origins
gen double task_pct=100*task
gen double onet_pct=100*onet_published
gen double difference_pp=100*difference
gen double origins_more_pct=100*share_more
sort dataset mode
save "$OUT/headline_results.dta", replace
export delimited using "$OUT/headline_results.csv", replace
format task_pct onet_pct difference_pp origins_more_pct %9.4f
list dataset origins task_pct onet_pct difference_pp more ties less origins_more_pct if mode=="equal_length", noobs abbreviate(20)


* Reference results enter only after independent calculation above.
import delimited using "expected_summary.csv", varnames(1) asdouble clear
keep dataset mode task onet_published difference origins more ties less share_more
foreach v in task onet_published difference origins more ties less share_more {
 rename `v' ref_`v'
}
tempfile expected
save `expected'
use "results/headline_results.dta", clear
merge 1:1 dataset mode using `expected', assert(match) nogen
foreach v in task onet_published difference origins more ties less share_more {
 assert abs(`v'-ref_`v')<1e-10
}
display "PASS: all headline values and counts match."
log close
