// takes in an array and returns index of where we placed our pivot value
function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start]
  let swapIndex = start

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++
      swap(arr, swapIndex, i)
    }
  }
  // do final swap of start pivot and where it should be placed
  swap(arr, start, swapIndex)

  return swapIndex
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    // left side of array
    quickSort(arr, left, pivotIndex - 1)
    // right side of array
    quickSort(arr, pivotIndex + 1, right)
  }

  console.log(arr)
  return arr
}

quickSort([4, 6, 9, 1, 2, 5, 3])
