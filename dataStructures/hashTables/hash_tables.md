# Hash tables (or hash map)

## What is a hash table?
- hash tables are used to store key-value pairs
- they are like arrays, but the keys are not ordered 
- unlike arrays, hash tables are fast for all of the following operations:
  - finding values
  - adding new values
  - removing values
- nearly every programming language has some sort of hash table data structure
- because of their speed hash tables are very commonly used
- in JavaScript these are Objects and Maps
  - objects have some restrictions though (they can only have strings as the keys)

## Create a hash map from scratch
- to implement a hash table, we'll be using an array
- in order to look up values by key, we need a way to convert keys into valid array indices
  - a function that performs this task is called a hash function

## Hash functions
- used to convert keys into a valid array index (small number)
- what makes a good hash function: 
  - fast (i.e. constant time)
  - doesn't cluster outputs at specific indices, but distributes uniformly
  - deterministic (same input yields same output)
- example
```javascript
// simple hash that works with strings only
function hash(string, arrLength) {
  let total = 0
  // use a prime number to decrease collisions
  let prime = 31
  for (let i = 0; i < Math.min(string.length, 100); i++) {
    let char = string[i]
    let value = char.charCodeAt(0) - 96
    total = (total * prime + value) % arrLength
  }
  return total
}
```
- prime numbers in hash functions:
  - the prime number in the hash is helpful in spreading out the keys more uniformly
  - it's also helpful if the array that you're putting values into has a prime length

## Handling collisions
- a collision is when a hash function returns the same hash for two different keys
- even with large arrays and a great hash function, collisions are inevitable 
- ways to handle them:
  - separate chaining:
    - with separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or linked list)
    - this allows us to store multiple key-value pairs at the same index
  - linear probing:
    - with linear probing, when we find a collision, we search through the array to find the next empty slot
    - unlike with separate chaining, this allows us to store a single key-value at each index

## Set / Get
- set
  - accepts a key and a value
  - hashes the key
  - stores the key-value pair in the hash table array via separate chaining
- get
  - accepts a key
  - hashes the key
  - retrieves the key-value pair in the hash table
  - if the key isn't found, return undefined 

## Keys / Values
- keys
  - loops through the hash table array and returns an array of keys in the table
- values 
  - loops through the hash table array and returns an array of values in the table

## Big O of hash tables
- insert : O(1)
- deletion : O(1)
- access : O(1)
