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
  - 
