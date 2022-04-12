# Searching Algorithms

## Linear Search
- linear search refers to searching through an array one item at a time until you find the item you are looking for
- there are many different search methods on arrays in Javascript:
  - indexOf
  - includes
  - find
  - findIndex
- linear search pseudocode: 
  - this function accepts an array and a value
  - loop through the array and check if the current array element is equal to the value
  - if it is, return the index at which the element is found
  - if the value is never found, return -1
- linear search is O(n)

## Binary Search
- binary search is a much faster form of search
- rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time 
- binary search only works on sorted arrays
- binary search pseudocode:
  - this function accepts a sorted array and a value
  - create a left pointer at the start of the array, and a right pointer at the end of the array
  - while the left pointer comes before the right pointer:
    - create a pointer in the middle
    - if you find the value you want, return the index
    - if the value is too small, move the left pointer up
    - if the value is too large, move the right pointer down
  - if you never find the value, return -1
- see `divide_and_conquer.js` for and example of this
- big O of binary search
  - O(log n) - worst and average case (but still really good)
  - O(1) - best case

## Naive String Search
- suppose you want to count the number of times a smaller string appears in a longer string
- a straightforward approach involves checking pairs of characters individually 
- pseudocode
  - loop over the longer string
  - loop over the shorter string
  - if the characters don't match, break out of the inner loop
  - if the characters do match, keep going
  - if you complete the inner loop and find a match, increment the count of matches
  - return the count
```javascript
function naiveSearch(long, short) {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if(short[j] !== long[i + j]) break
      if (j === short.length - 1) count++
    }
  }
  return count
}
```
