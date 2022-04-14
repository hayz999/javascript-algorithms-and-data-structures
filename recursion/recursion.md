# Recursion

## Why use recursion?
- what is recursion?
  - a process (a function in our case) that calls itself
- why?
  - it's everywhere
    - JSON.parse/JSON.stringify are recursive functions
    - DOM traversal algorithms 
    - object traversal
    - we will see it with more complex data structures
    - it's sometimes a cleaner alternative to iteration

## The Call Stack
- in almost all program languages, there is a built in data structure that manages what happens when functions are invoked
- the call stack:
  - it's a stack data structure
  - any time a function is invoked it is placed (pushed) on the top of the call stack
  - when javascript sees the return keyword or when the function ends, the compiler will remove (pop) from the top
- when we write recursive functions we keep pushing new functions onto the call stack

## How recursive functions work
- invoke the same function with a different input until you reach your base case
- base case:
  - the condition when the recursion ends
  - this is the most important concept to understand
- example:
```javascript
    function countDown(num) {
      if (num <= 0) {
        console.log("All done!")
        return
      }
      console.log(num)
      num--
      countDown(num)
    }
```
- another example
```javascript
    function sumRange(num) {
      if (num === 1) return 1
      return num + sumRange(num - 1)
    }
```
- writing factorials iteratively:
```javascript
    function factorial(num) {
      let total = 1
      for (let i = num; i > 1; i--) {
        total *= i
      }
      return total
    }
```
- writing factorials recursively 
```javascript
    function factorial(num) {
      if (num <= 1) return 1
      return num * factorial(num - 1)
    }
```

## Common recursion pitfalls
- no base case or incorrect base case causing infinite method calls
- forgetting to return or returning the wrong thing

## Helper method recursion
- a function with a function within it that runs the code recursively 
- example:
```javascript
    function outer(input) {
      let outerScopedVariable = []
      
      function helper(helperInput) {
        // modify the outerScopedVariable
        helper(helperInput--)
      }
      
      helper(input)
      
      return outerScopedVariable
    }
```
- collect all of the odd values in an array
```javascript
    function collectOddValues(arr) {
      let result = []
      
      function helper(helperInput) {
        if (helperInput.length === 0) {
          return
        }
        
        if (helperInput[0] % 2 !== 0) {
          result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
      }
      
      helper(arr)
      return result
    }
```

## Pure Recursion
- recursion that does not rely on a helper function
- example:
```javascript
function collectOddValues(arr) {
  let newArr = []
  
  if (arr.length === 0) {
    return newArr
  }
  
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }
  
  // recursive call and setting the newArray as a contactination of all of the arrays created from the recursive calls of the method
  newArr = newArr.concat(collectOddValues(arr.slice(1)))
  return newArr
}
```
- for arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
- remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
- to make copies of objects use Object.assign, or the spread operator
