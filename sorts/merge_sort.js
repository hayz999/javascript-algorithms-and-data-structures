function merge(arr1, arr2) {
  let results = []
  // arr1 index
  let i = 0
  // arr2 index
  let j = 0

  // push sorted values into results array 
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }

  // catch any extra values if the array lengths are different 
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }

  return results
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  
  // find the middle of the array
  let mid = Math.floor(arr.length/2)
  // create an array from the first half, and keep splitting until it's an array of 1 element
  let left = mergeSort(arr.slice(0, mid))
  // create an array from the second half, and keep splitting until it's an array of 1 element
  let right = mergeSort(arr.slice(mid))
  
  return merge(left, right)
}

mergeSort([5, 80, 3, 700, 6, 2, 7, 12])
