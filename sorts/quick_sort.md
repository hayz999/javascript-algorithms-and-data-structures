# Quick Sort

## Intro
- like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
- works by selecting one element (called the "pivot) and finding the index where the pivot should end up in the sorted array
- once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

## Pseudocode
- pivot helper
  - in order to implement quick sort, it's useful to first implement a function responsible for arranging elements in an array on either side of a pivot
  - given an array, this helper function should designate an element as the pivot
  - it should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
  - the order of elements on either side of the pivot doesn't matter
  - the helper should do this in place, that is, it should not create a new array
  - when complete, the helper should return the index of the pivot
- picking a pivot
  - the runtime of quick sort depends in part on how one selects the pivot
  - ideally the pivot should be chosen so that it's roughly the median value in the data set you're sorting
  - for simplicity, we'll always choose the pivot to be the first element
- pivot pseudocode
  - it will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
  - grab the pivot from the start of the array
  - store the current pivot index in a variable (this will keep track of where the pivot should end up)
  - loop through the array from the start until the end
    - if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
  - swap the starting element (i.e. the pivot) with the pivot index
  - return the pivot index
- quicksort pseudocode 
  - call the pivot helper on the array
  - when the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
  - your base case occurs when you consider a subarray with less than 2 elements

## Big O of Quicksort

| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity|
| --- | --- | --- | --- |
| O(n log n) | O(n log n) | O(n^2) | O(log n) |

- Best case
  - O(log n) decompositions needed to break the array down into single element arrays
  - O(n) comparisons per decomposition 
- Worst case
  - using pivot at index of 0 with an already sorted array
  - O(n) decompositions
  - O(n) comparisons per decomposition 
    - results in O(n^2) complexity
