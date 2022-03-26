// write a function called maxSubarraySum which accepts an array of integers and a number called n
// the function should calculate the maximum sum of n consecutive elements in the array

// time complexity of O(n)
function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0

  if (arr.length < num) return null

  // get the sum of the first group of numbers
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  // save that sum to our tempSum variable
  tempSum = maxSum

  // start at the index after the above sum was complete (num would be that index)
  for (let i = num; i < arr.length; i++) {
    // move our "window" up one index and subtract the previous index and add the next index
    tempSum = tempSum - arr[i - num] + arr[i]
    // determine if this new value is higher than the old value
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10  (which 2 digits next to each other returns the highest sum)
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17 (which 4 digits next to each other returns the highest sum)
maxSubarraySum([4, 2, 1, 6], 1) // 6
maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
maxSubarraySum([], 4) // null