# Insertion Sort

## About
- builds up the sort by gradually creating a larger left half which is always sorted
- pseudocode
  - start by picking the second element in the array
  - now compare the second element with the one before it and swap if necessary
  - continue to the next element and if it is in the incorrect order, iterate  through the sorted portion (i.e. the left side) to place the element in the correct place
  - repeat until the array is sorted

## Implementation
```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]
    for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = current
  }
  return arr
}
```

## Big O complexity
- worst case it is O(n^2)
- if data is almost all sorted, complexity is O(n)

## Comparing Big O of simple sorting algorithms (or quadratic algos)

| Algorithm | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
|-----------|------------------------|---------------------------|-------------------------|------------------|
| Bubble Sort | O(n) | O(n^2) | O(n^2) | O(1) |
| Insertion Sort | O(n) | O(n^2) | O(n^2) | O(1) |
| Selection Sort | O(n^2) | O(n^2) | O(n^2) | O(1) |

- these sorts do not scale well, but can be good for small data sets