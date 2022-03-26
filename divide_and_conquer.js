// given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located
// if the value is not found, return -1

// this built in method has a complexity of O(n) which is slower than the other example in this file
function search(array, val) {
  return array.indexOf(val)
}

// but this is the complicated binary search solution
// time complexity is Log(N)
function search(array, val) {
  let min = 0
  let max = array.length - 1

  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    let currentElement = array[middle]

    if (array[middle] < val) {
      min = middle + 1
    } else if (array[middle] > val) {
      max = middle - 1
    } else {
      return middle
    }
  }
  return -1
}

search([1, 2, 3, 4, 5, 6], 4) // 3
search([1, 2, 3, 4, 5, 6], 6) // 5
search([1, 2, 3, 4, 5, 6], 11) // -1