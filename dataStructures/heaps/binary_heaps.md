# Binary heaps

## What is a binary heap?
- binary heaps are a type of tree
- in a MaxBinaryHeap, parent nodes are always larger than child nodes
- in a MinBinaryHeap, parent nodes are always smaller than child nodes
- each node can have at most 2 children
- there is no order for left vs right, they just have to both be smaller or larger than the parent node depending on the type of heap
- MaxBinaryHeap:
  - each parent has at most two child nodes
  - the value of each parent node is always greater than its child nodes
  - in a max binary heap the parent is greater than the children, but there are no guarantees between sibling nodes
- MinBinaryHeap:
  - each parent has at most two child nodes 
  - the value of each parent node is always less than its child nodes
  - in a min binary heap the parent is less than the children, but there are no guarantees between sibling nodes
- a binary heap is as compact as possible.  all the children of each node are as full as they can be and left children are filled out first

## Why are binary heaps important?
- binary heaps are used to implement priority queues, which are very commonly used data structures
- they are also used quite a bit with graph traversal algorithms

## Storing heaps
- you can use an array or list to store a heap
- to find a nodes child nodes for any index of an array n:
  - the left child is stored at (2 * n) + 1
  - the right child is stored at (2 * n) + 2
- to find a child nodes parent node:
  - for any child node at index n
    - its parent is at index (n-1)/2 (floored, so no decimals)

## Inserting into a Max Binary Heap
- add value to the end of the array
- bubble up to place the value in the right place by swapping with the current parent value
  - create a variable called index which is the length of the values property - 1
  - create a variable called parentIndex which is the floor of (index - 1)/2
  - keep looping as long as the values element at the parentIndex is less than the values element at the child index
    - swap the value of the values element at the parentIndex with the value of the element property at the child index
    - set the index to be the parentIndex, and start over

## Removing from a heap
- remove the root
- replace with the most recently added
- adjust (sink down)
  - the procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min heap) and restoring the properties is called down-heap (also know as bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade down, and extract-min/max)
- pseudocode:
  - swap the first value in the values property with the last one
  - pop from the values property, so you can return the value at the end
  - have the new root "sink down" to the correct spot
    - your parent index starts at 0 (the root)
    - find the index of the right child : (2 * index) + 1 (make sure it's not out of bounds)
    - find the index of the right child : (2 * index) + 2 (make sure it's not out of bounds)
    - if the left or right child is greater than the element, swap.  if both left and right children are larger, swap the largest child
    - the child index you swapped to now becomes the new parent index
    - keep looping and swapping until neither child is larger than the element
  - return the old root

## Building a priority queue
- priority queues are a data structure where each element has a priority. elements with higher priorities are served before elements with lower priority
- these are an abstract concept separate from heaps
- naive approach would be to use a list (array) to store all elements, then iterate over the entire list to find the highest priority element
- better approach is to use a min or max heap which would have much better time complexity
- each item in the heap will be a node with a value and a priority 
- pseudocode for the class:
  - write a min binary heap - lower number means higher priority
  - each node has a val and a priority. use the priority to build the heap
  - enqueue method accepts a value and a priority, makes a new node, and puts it in the right spot based off of its priority
  - dequeue method removes root element, returns it, and rearranges the heap using priority 

## Big O of a binary heap
- insertion : O(log n)
- removal : O(log n)
- search : O(n)