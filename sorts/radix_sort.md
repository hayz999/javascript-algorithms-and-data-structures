# Radix sort

## About
- radix sort is a special sorting algorithm that works on lists of numbers
  - mainly binary
- it never makes comparisons between elements
- it exploits the fact that information about the size of a number is encoded in the number of digits
- more digits means a bigger number

## Radix sort helpers
- in order to implement radix sort, it's helpful to build a few helper functions first:
  - getDigit(num, place) - returns the digit in num at the given place value
  - digitCount(num) - returns the number of digits in num
  - mostDigits(nums) - given an array of numbers, returns the number of digits in the largest numbers in the list

## Radix sort pseudocode
- define a function that accepts list of numbers
- figure out how many digits the largest number has
- loop from k = 0 up to this largest number of digits
- for each iteration of the loop
  - create buckets for each digit (0 - 9)
  - place each number in the corresponding bucket based on it's k'th digit
- replace our existing array with values in our buckets, starting with 0 and going up to 9
- return list at the end

## Big O of radix sort

| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity|
| --- | --- | --- | --- |
| O(nk) | O(nk) | O(nk) | O(n + k) |

- there is controversy about the above assignments of the complexity
- k is the length of the digits, so if we are passing through huge numbers that will increase the run time 
- n is the length of the array
