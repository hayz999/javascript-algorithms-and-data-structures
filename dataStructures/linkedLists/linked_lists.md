# Linked Lists

## Single Linked Lists
- what is a linked list?
  - a data structure that contains a head, tail and length property
  - linked lists consist of nodes, and each node has a value and a pointer to another node or null
- comparisons with arrays:
  - lists:
    - do not have indexes
    - connected via nodes with a next pointer
    - random access is not allowed
  - arrays:
    - indexed in order
    - insertion and deletion can be expensive
    - can quickly be accessed at a specific index
  
### Pushing into the list
- this function should accept a value
- create a new node using the value passed to the function
- if there is no head property on the list, set the head and tail to be the newly created node
- otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
- increment the length by one 

### Popping
- removing a node from the end of the linked list
- pseudocode:
  - if there are no nodes in the list, return undefined 
  - loop through the list until you reach the tail
  - set the next property of the 2nd to last node to be null
  - set the tail to be the 2nd to last node
  - decrement the length of the list by 1
  - return the value of the node that was removed

### Shifting
- removing a new node from the beginning of the linked list
- pseudocode:
  - if there are no nodes,return undefined
  - store the current head property in a variable 
  - set the head property to be the current head's next property
  - decrement the length by 1
  - return the value of the node removed

### Unshift
- adding a new node to the beginning of the linked list
- pseudocode
  - this function should accept a value
  - create a new node using the value passed to the function
  - if there is no head property on the list, set the head and tail to be the newly created node 
  - otherwise set the newly created node's next property to be the current head property on the list
  - set the head property on the list to be that newly created node
  - increment length of the list by 1
  - return the linked list

### Get
- retrieving a node by it's position in the linked list
- pseudocode:
  - this function should accept an index
  - if the index is less than zero or greater than or equal to the length of the list, return null
  - loop through the list until you reach the index and return the node at that specific index (have a counter variable)
  - return the node 

### Set
- changing the value of a nde based on it's position in the linked list
- pseudocode:
  - this function should accept an index and a value
  - use your get function to find the specific node
  - if the node is not found return false
  - if the node is found, set the value of that node to be the value passed to the function and return true

### Insert
- adding a node to the linked list at a specific position
- pseudocode:
  - if the index is less than zero or greater than the length, return false 
  - if the index is the same as the length, push a new node to the end of the list (use push method) 
  - if the index is 0, unshift a new node to the start of the list (use unshift method)
  - otherwise using the get method, access the node at the index - 1
  - set the next property on that node to be the new node
  - set the next property on the new node to be the previous next
  - increment the length
  - return true

### Remove
- removing a node from the linked list at a specific position
- pseudocode:
  - if the index is less than zero or greater than the length, return undefined
  - if the index is the same as the length - 1 use the pop method
  - if the index is 0 use the shift method 
  - otherwise using the get method, access the node at the index - 1
  - set the next property on that node to be the next of the next node
  - decrement the length by one 
  - return the value of the node removed

### Reverse
- reversing the linked list in place
- pseudocode:
  - swap the head and the tail
  - create a variable called next
  - create a variable called previous
  - create a variable called node and initialize it to the head property
  - loop through the list
  - set next to be the next property on whatever node is
  - set the next property on the node to be whatever previous is
  - set previous to be the value of the node variable
  - set the node variable to be the value of the next variable

### Big O of singly linked lists
- insertion : O(1)
- removal : it depends, O(1) or O(n)
- searching : O(n)
- access : O(n)

## Doubly linked lists
- almost identical to singly linked lists, except every node has another pointer to the previous node
- doubly linked lists have more flexibility but they take up more memory, so there is a tradeoff 

### Push
- adding a node to the end of the doubly linked list
- pseudocode:
  - create a new node with the value passed to the function
  - if the head property is null, set the head and tail to be the newly created node
  - if not, set the next property on the tail to be that node
  - set the previous property on the newly created node to be the tail
  - set the tail to be the newly created node
  - increment the length by 1
  - return the list

### Pop
- removing a node from the end of the doubly linked list
- pseudocode:
  - if there is no head, return undefined
  - store the current tail in a variable to return later
  - if the length is 1, set head and tail to be null
  - update the tail to be the previous node
  - set the new tails next to null
  - decrement the length by one
  - return the value removed

### Shift
- remove a node from the beginning of the doubly linked list
- pseudocode:
  - if there is no head, return undefined
  - store the current head property in a variable
  - if the length is one set the head and tail to be null
  - set the head to be the next of the old head
  - set the head's prev property to null
  - set the old heads next to null
  - decrement the length by 1
  - return the removed node

### Unshift
- add a node to the beginning of the list
- pseudocode:
  - create a new node with the value passed to the function
  - if the length is 0 set the head and tail to be the new node
  - otherwise
    - set the prev property of the current head to be the new node
    - set the next property on the new node to be the current head
    - update the head to be the new node
  - increment length by 1
  - return the list

### Get
- accessing a node in a doubly linked list by its position
- pseudocode:
  - pass in an index
  - if the index is less than zero or greater than or equal to the length of the list, return null
  - if the index is less than or equal to half of the length of the list:
    - loop through the list starting from the head and loop towards the middle
    - return the node once it is found
  - if the index is greater than half the length of the list
    - loop through the list starting from the tail and loop towards the middle
    - return the node once it is found

### Set
- takes an index and value to set that value at that spot in the list
- pseudocode:
  - create a variable which is the result of the get method at the index passed to the function
  - if the get method returns a valid node, set the value of that node to be the value passed to the function
  - return true
  - otherwise return false

### Insert
- inserts a new node at a specific index
- pseudocode:
  - if the index is less than zero or greater than or equal to the length return false
  - if the index is 0 unshift
  - if the index is the same as the length, push
  - use the get method to access the index - 1
  - set the next and prev properties on the correct nodes to link everything together
  - increment the length
  - return true

### Remove
- removes from the list at a specific index
- pseudocode:
  - if the index is less than zero or greater than or equal to the length return undefined
  - if the index is 0, shift
  - if the index is the same as the length - 1, pop
  - else use the get method to retrieve the item to be removed
  - update the next and prev properties to remove the found node from the list
  - set next and prev to null on the found node
  - decrement the length
  - return the removed node

### Big O of doubly linked lists
- insertion : O(1)
- removal : O(1)
- searching: O(n)
- access: O(n)