problems solved with recursion + memoization

<quote>
Memoization is a specific form of caching that involves caching the return value
of a function based on its parameters.
</quote>

<quote>
Put simply, a bottom-up algorithm "starts from the beginning," while a recursive
algorithm often "starts from the end and works backwards."
</quote>

Bottom Up DP:

```
function fib(n){
  let results = [0, 1];
  for(let i = 2; i <= n; i++){
      results.push(results[i-1] + results[i-2])
  }
  return results.get(-1);
}
```


# Which sort to use 
source: https://replit.com/@aneagoie/sorting-exercise-solution#index.js 

//#1 - Sort 10 schools around your house by distance:
insertion sort

//#2 - eBay sorts listings by the current Bid amount:
radix or counting sort

//#3 - Sort scores on ESPN
Quick sort

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
Merge Sort

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
Insertion Sort

//#6 - Temperature Records for the past 50 years in Canada
radix or counting Sort
Quick sort if decimal places

//#7 - Large user name database needs to be sorted. Data is very random.
Quick sort

//#8 - You want to teach sorting
Bubble sort
