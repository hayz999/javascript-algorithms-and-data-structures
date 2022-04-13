# Bubble sort

## Elementary Sorting Algorithms
- what is sorting?
  - sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order
- examples:
  - sorting numbers from smallest to largest
  - sorting names alphabetically
- why do we need to learn sorts?
  - sorting is incredibly common task, so it's good to know how it works
  - there are many ways to sort things, and different techniques have their own advantages and disadvantages 

## Built in JS sorting method 
- doesn't always work the way that you expect
  - sorts alphabetically A-Z on strings
  - sorts numbers by unicode, which isn't ideal
- the built-in sort method accepts an optional comparator function
- you can use this comparator function to tell JavaScript how you want it to sort
- the comparator looks at pairs of elements (a and b), determines their sort order based on the return value
  - if it returns a negative number, a should come before b
  - if it returns a positive number, a should come after b
  - if it returns 0, a and b are the same as far as the sort is concerned 
- comparator example:
```javascript
function numberCompare(num1, num2) {
  return num1 - num2
}

[5, 8, 2, 10].sort(numberCompare) // [2, 5, 8, 10]
```

## BubbleSort Overview
- not that efficient and not that commonly used
- a sorting algorithm where the largest values bubble to the top
- great learning tool for [sorting](https://visualgo.net/en/sorting)
- how to swap items in an array:
```javascript
function swap(arr, idx1, idx2) {
  const temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}
// or

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}
```
- pseudocode:
  - start looping through the array from the end of the array towards the beginning with a variable called i
  - start an inner loop with a variable called j from the beginning until i - 1
  - if arr[j] is greater than arr[j + 1] swap those two values
  - return the sorted array

## BubbleSort implementation
```javascript
function bubble_sort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        // swap
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
```

## BubbleSort Optimization
- if our data is almost sorted or already sorted, bubble sort treats it the same way as if it isn't sorted at all
- what we can do is break out of the loops if we didn't make any swaps
```javascript
function bubble_sort(arr) {
  const noSwaps
  
  for (let i = arr.length; i > 0; i--) {
    
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      
      if(arr[j] > arr[j + 1]) {
        // swap
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false
      }
    }
    
    if (noSwaps) break
  }
  return arr
}
```

## Big O of BubbleSort
- roughly it is O(n^2) with a completely unsorted array
- it gets closer to O(n) when data is nearly completely sorted 
