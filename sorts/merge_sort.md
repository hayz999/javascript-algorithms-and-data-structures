# Merge sort

## Why use sorts like Merge?
- they can improve time complexity from O(n^2) to O(n log n)

## Merge Sort basics
- it's a combination of two things - merging and sorting
- exploits the fact that arrays of 0 or 1 element are always sorted
- works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

## Merging Arrays
- in order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
- this function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it
- pseudocode of merge:
  - create an empty array, take a look at the smallest values in each input array
  - while there are still values we haven't looked at
    - if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    - if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
    - once we exhaust one array, push in all remaining values from the other array

## Sorting Arrays
- pseudocode of sort:
  - break up the array into halves until you have arrays that are empty or have one element
    - do this recursively 
  - once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
  - once the array has been merged back together, return the merged (and sorted!) array
- see `merge_sort.js` for implementation

## Big O complexity of merge sort

| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity|
| --- | --- | --- | --- |
| O(n log n) | O(n log n) | O(n log n) | O(n) |
