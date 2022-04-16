# Stacks

## What is a stack
- an abstract data structure
- is a LIFO (last in first out) data structure
- the last element added to the stack will be the first element removed from the stack
- example is the call stack in javascript
- can be visualized as a linked list where every new value is added to the head and every value is removed from the head

## Use cases
- managing function invocations
- undo/redo (command z)
- routing (the history object) is treated like a

## Implementation
- array implementation:
```javascript
const stack = []
stack.push("google")
stack.push("instagram")
stack.push("youtube")

stack.pop()
```
  - if you use `pop` and `push` in tandem or `shift` and `unshift` in tandem you are using the array like a stack
- linked list implementation
  - see `stacks.js`
  - it would follow the logic of `shift` and `unshift` in a singly linked list

## Big O of stacks
- insertion : O(1)
- removal : O(1)
- searching : O(n)
- access : O(n)

# Queues

## What is a Queue
- queues follow a FIFO (first in first out) data structure
- example is jobs firing off or events 
- background tasks
- uploading resources
- printing / task processing

## Implementation
- example with an array:
```javascript
const q = []
q.push('item')
// use shift to get the first item from the beginning
q.shift()
```
  - removing from the beginning of an array causes a re-indexing of the entire array
  - `unshift` combined with `pop` or `push` combined with `shift` will give you the functionality of a queue
- example with linked list:
  - see `queues.js`
    - would use `push` from linked list to add to the queue and use `shift` to remove from the queue
      - call these `enqueue` and `dequeue`
      - would do this to avoid the time complexity of having to map through the list using pop

## Big O of queues
- insertion : O(1)
- removal : O(1)
- searching : O(n)
- access : O(n)