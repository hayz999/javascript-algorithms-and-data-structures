# Algorithms and problem solving patterns

## Basics
- what is an algorithm?
  - a process or set of steps to accomplish a certain task
  - almost everything that you do in programming involves some kind of algorithm. it's the foundation for being a successful problem solver and developer
- how do you improve at solving problems?
  - devise a plan for solving problems
  - master common problem solving patterns

## Understand the problem
1. can I restate the problem in my own words?
2. what are the inputs that go into the problem?
3. what are the outputs that should come from the solution to the problem?
4. can the outputs be determined from the inputs? in other words, do i have enough information to solve the problem? 
5. how should i label the important pieces of data that are a part of the problem?

### example
- write a function which takes two numbers and returns their sum
  1. write a function that adds to numbers
  2. inputs: how large will the numbers be? are they ints or floats? are we allowing negative numbers? what happens if we leave an input off?
  3. outputs: should it be an int? should it be a float? for large numbers can we return a string?
  4. what do we do if input requirements are not met? should we return undefined? 
  5. name function add, inputs named num1 and num2

## Explore concrete examples
- coming up with examples can help you understand the problem better
- examples also provide sanity checks that your eventual solution works how it should
- user stories are examples for a problem 
- steps:
  - start with simple examples with input and output
  - progress to more complex examples
  - explore examples with empty inputs
  - explore examples with invalid inputs

### example
- write a function which takes in a string and returns counts of each character in the string
  - start with the questions from `Understand the problem`
  - mock out what the method input and output would look like 
    - `charCount("aaaa"); // {a: 4}`
    - `charCount("hello"); // {h: 1, e: 1, l: 2, o: 1}`
  - ask about edge cases
    - what do we do with numbers in the string?
    - what do we do with capital letters? do we store those separately?
  - what should we return if an empty string is passed through?
  - what should we return if an invalid input like an int is passed through?

## Break it down
- take the actual steps of the problem and write them down
  - this can be sudo code or comments in your code 
  - this forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well

## Solve or simplify
- solve the problem, if you can't solve a simpler problem
  - ignore the part that is giving you a really hard time, and focus on the parts you understand first
- simplify
  - find the core difficulty in what you're trying to do
  - temporarily ignore that difficulty
  - write a simplified solution
  - then incorporate that difficulty back in

## Look back and refactor
- refactoring questions:
  - can you check the result?
  - can you derive the result differently?
  - can you understand it at a glance?
  - can you use the result or method for some other problem?
  - can you improve the performance of your solution?
  - can you think of other ways to refactor?
  - how have other people solved this problem?