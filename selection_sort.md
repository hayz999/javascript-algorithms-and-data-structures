# Selection Sort

## About
- similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
- pseudocode
  - store the first element as the smallest value you've seen so far
  - compare this item to the next item in the array until you find a smaller number
  - if a small number is found, designate that smaller number to be the new "min" and continue until the end of the array
  - if the "min" is not the value (index) you initially began with, swap the two values
  - repeat this with the next element until the array is sorted

## Implementation
```javascript
function selection_sort(arr) {
  for (let i = 0; i < arr.length; i ++) {
    let min = i
    
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[min] > arr[j]) {
        min = j
      }
    }
    if (i !== min) {
      const temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
  return arr
}
```

## Big O of selection sort
- roughly it is O(n^2), so not ideal
- it potentially is better than bubble sort in cases where you want to minimize the number if swaps made
