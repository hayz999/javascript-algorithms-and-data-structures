// write a function called sumZero which accepts a sorted (lowest to highest) array of integers.
// the function should find the first pair where the sum is 0.
// return an array that includes both values that sum to zero or undefined if a pair does not exit

// time complexity is O(n)
// space complexity is O(1)
function sumZero(arr) {
  let left = 0
  let right = arr.length - 1

  while(left < right) {
    let sum = arr[left] + arr[right]
    if(sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else left++
  }
}

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined

// implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array
// there can be negative numbers in the array, but it will always be sorted

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0
  }
  // start at index 0
  let i = 0

  // loop through the rest of the array starting at index 1 (let j = 1)
  for (let j = 1; j < arr.length; j++) {
    // if the value at start index is not the same as the comparison index, move i forward one and assign the value in that spot to the comparison value
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  // add one because indexes start at 0
  return i + 1
}

countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4