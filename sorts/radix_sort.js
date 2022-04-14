// helper method to get the digit in a number at a specific index in that number
// moves from end of the number to the beginning of the number
// assume base 10 numbers
function getDigit(num, place) {
  // Math.abs is in case negative numbers are passed
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

// determine number of digits in the number
function digitCount(num) {
  return Math.abs(num).toString().length
}

// determine the largest digit count in an array of number
function mostDigits(nums) {
  let maxDigits = 0

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }

  return maxDigits
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums)

  for (let k = 0; k < maxDigitCount; k++) {
    // create empty arrays to capture numbers with specific digits
    let digitBuckets = Array.from({ length: 10}, () => [])
    for (let i = 0; i < nums.length; i++) {
      // push digit into bucket where the digit value equals the index of of the bucket array in the array of bucket arrays
      digitBuckets[getDigit(nums[i], k)].push(nums[i])
    }
    // merge all the buckets back together in their new order
    nums = [].concat(...digitBuckets)
  }

  console.log(nums)
  return nums
}

radixSort([23, 345, 5467, 12, 2345, 9852])
