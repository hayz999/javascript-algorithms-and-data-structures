// write a function called power which accepts a base and an exponent.
// the function should return the power of the base to the exponent

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
  const mainBase = base
  let result = 1

  function multiply(base, exponent) {
    if (exponent <= 1) return result

    result = base * mainBase
    exponent--
    multiply(result, exponent)
  }

  multiply(base, exponent)
  return result
}

// write a function which takes in an array of numbers and returns the product of them all

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  if(arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

// write a recursive function which accepts a number and returns the nth number in the Fibonacci sequence
// recall that the fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8... where every number is equal to the sum of the previous two numbers

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}
