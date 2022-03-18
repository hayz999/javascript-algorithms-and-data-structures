To run a JS  file in the terminal just type `node filename.js`

# Big O Notation

## Whats the need for Big O ?
- imagine we have multiple implementations of the same function, how do we decide what is the best solution?
  - using Big O can tell us what the most performant solution would be
- this matters when working with large amounts of data
- useful in discussing the tradeoffs between different solutions
- important to understand which parts of your code might be slowing things down
- See `big_o.js` for practice example of time complexity of a simple problem

## The problem with time:
  - different machines will record different times
  - the same machine can record different times
  - for fast algorithms, speed measurements may not be precise enough
  - instead of counting the number of seconds it takes to run an algorithm, we can count the number of simple operations the computer has to perform

## Counting operations
- in the second example in `big_o.js` there are 3 simple operations:
  - multiplication
  - addition
  - division
- the other solution because it is a lop the number of operations is `n additions` where *n* is the number of times we iterate in that loop
  - the number of operations grows roughly proportionally with *n*

## Big O more details:
- big O notation is a way to formalize fuzzy counting
- it allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
- we won't care about the details, only the time complexity trends 
- definition:
  - we say that an algorithm **O(f(n))** if the number of simple operations the computer has to do is eventually less than a constant time **f(n)**, as **n** increases
    - f(n) could be linear (f(n) = n)
    - f(n) could be quadratic (f(n) = n^2)
    - f(n) could be constant (f(n) = 1)
    - f(n) could be something entirely different 
  - the below function has a Big O of **O(1)**  (constant) since the complexity remains constant no matter what *n* is 
  ```
  function sumNumbers2(n) {
    return n * (n + 1) / 2
  }
  ```
  - the below function has a complexity of **O(n)** (linear)
  ```
  function sumNumbers(n) {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total
  }
  ```
  - a simple nested loop has a complexity of **O(n^2)** (quadratic) which is why nested loops are very inefficient 

## Simplifying Big O expressions
- when determining the time complexity of an algorithm, there are some helpful rule of thumbs for big ) expressions:
  - constants don't matter
    - simplify things
      - **O(2n) -> O(n)**
      - **O(500) -> O(1)**
      - **O(13n^2) -> O(n^2)**
  - smaller terms don't matter
    - **O(n + 10) -> O(n)**
- big O shorthands
  - analyzing complexity with big O can get complicated
  - there are several rules of thumb that can help
  - these rules won't **ALWAYS** work, but are a helpful starting point
    1. arithmetic operations are constant
    2. variable assignment is constant
    3. accessing elements in an array (by index) or object (by key) is constant
    4. in a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

## Space Complexity
- the amount of memory an algorithm takes up
- what about the inputs?
  - sometimes you will hear the term auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs
  - unless otherwise noted, when we talk about space complexity, technically we'll be talking about auxiliary space complexity 
- space complexity in JS: rules of thumb
  - most primitives (booleans, numbers, undefined, null) are constant space, O(1)
  - strings require O(n) space (where n is the string length)
  - reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)
  - follows the same patters of:
    - O(1) : constant
    - O(n) : linear
    - O(n^2) : quadratic 

## Logarithms
- Sometimes big O expressions involve more complex mathematical expressions
- what is a logarithm (or log)
  - log2(value) = exponent -> 2^exponent = value
- the logarithm of a number roughly measures the number of times you can divide that number by 2 **before you get a value that's less than or equal to one**
- logarithmic time complexity of **O(log n)** is great!
- certain searching algorithms have logarithmic time complexity
- efficient sorting algorithms involve logs
- recursion sometimes involved logarithmic space complexity

## Big O of objects
- when to use objects:
  - when you don't need ordered data
  - when you need fast access/insertion and removal
  - Insertion, Removal,and Access are all **O(1)**
  - Searching is **O(n)**

