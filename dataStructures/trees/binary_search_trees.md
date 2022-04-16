# Trees

## What is a tree
- a data structure that consists of nodes in a parent / child relationship
- trees are nonlinear and have branches and multiple paths
- can think of a singly linked list as a special case of a tree with only one path or branch
- tree terminology
  - root : the top node in a tree
  - child : a node directly connected to another node when moving away from the root
  - parent : the converse notion of a child
  - siblings: a group of nodes that have the same parent node
  - leaf : a node with no children
  - edge : the connection between one node and another

## Uses for trees
- HTML DOM is a tree
  - FE frameworks like React use trees for component rendering
- network routing
- abstract syntax trees : way of explaining the syntax structure of a coding language
- artificial intelligence 
- folders in operating systems
- JSON 

## Binary Search Tree
- each node can have at most 2 children
- data is sorted in a particular way
- every node to the left of a parent node is always less than the parent
- every node to the right of a parent node is always greater than the parent

### Inserting
- adds node to the tree in the correct spot depending on the value of the node
- pseudocode:
  - create a new node
  - starting at the root:
    - check if there is a root, if not - the root now becomes that new node
    - if there is a root, check if the value of the new node is greater than or less than the value of the root
    - if greater:
      - check to see if there is a node to the right
        - if there is, move to that node and repeat these steps
        - if there is not, add that node as the right property
    - if it is less:
      - check to see if there is a node to the left
        - if there is, move to that node and repeat these steps
        - if there is not, add that node as the left property
  - return the tree at the end

### Finding a node
- pseudocode:
  - starting at the root:
    - check if there is a root, if not return false
    - if there is a root, check if the value of the new node is the value we are looking for. if we found it return true
    - if not, check to see if the value is greater than or less than the value of the root
    - if it is greater:
      - check to see if there is a node to the right
        - if there is, move to that node and repeat these steps
        - if there is not, return false
    - if it is less
      - check to see if there is a node to the left
        - if there is, move to that node and repeat these steps
        - if there is not, return false
    - once the node is found return true

### Big O of binary search trees
- insertion : O(log n)
- searching : O(log n)
  - these are not guaranteed though, if your tree only has one branch it increases in time complexity because the number of steps to insert or search will increade