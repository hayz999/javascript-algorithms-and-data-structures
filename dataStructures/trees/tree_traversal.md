# Tree Traversal

## How to visit every node one time in a tree
- two main ways to approach this:
  - breadth-first search
  - depth-first search

### Breadth-first
- work across the tree from left to right
- visit every sibling node before we look at a child
- steps:
  - create a queue (this can be an array) and a variable to store the values of nodes visited
  - place the root node in the queue
  - loop as long as there is anything in the queue
    - dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    - if there is a left property on the node dequeued - add it to the queue
    - if there is a right property on the node dequeued - add it to the queue
  - return the variable that stores our values

### Depth first search
- move down the tree
- types:
  - pre-order
    - pseudocode:
      - create a variable to store the values of nodes visited
      - write a helper function which accepts a node
        - push the value of the node to the variable that stores the values
        - if the node has a left property, call the helper function with the left property on the node
        - if the node has a right property, call the helper function with the right property on the node
      - invoke the helper function with the current variable
      - return the visited variable
  - post order
    - pseudocode:
      - create a variable to store the values of nodes visited
      - write a helper function which accepts a node
        - if the node has a left property, call the helper function with the left property on the node
        - if the node has a right property, call the helper function with the right property on the node
        - push the value of the node to the variable that stores the values
        - invoke the helper function with the tree root
        - return the visited values 
    - in order
      - pseudocode:
        - create a variable to store the values of nodes visited
        - write a helper function which accepts a node
          - if the node has a left property, call the helper function with the left property on the node
          - push the value of the node to the variable that stores the values
          - if the node has a right property, call the helper function with the right property on the node
        - invoke the helper function on the tree root
        - return the visited nodes

## Which one is better?
- BFS (breadth first search) vs. DFS (depth first search)
  - if the tree has a lot of children (is considered wide), depth first search will take up less memory
  - if the tree is super deep with less nodes to keep track of, breadth first can take up less memory
  - potential use cases for DFS variants:
    - in-order
      - we get all nodes in the tree in their underlying order
    - pre-order
      - can be used to "export" a tree structure so that it is easily reconstructed or copied
      - essentially "flattens" the tree