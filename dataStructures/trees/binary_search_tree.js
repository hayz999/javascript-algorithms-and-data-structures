class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    const node = new Node(val)
    if (!this.root) {
      this.root = node
    } else {
      let current = this.root
      
      while (true) {
        if (val === current.val) return undefined

        if (val < current.val) {
          if (!current.left) {
            current.left = node
          } 
          current = current.left
        } else{
          if (!current.right) {
            current.right = node
          }
          current = current.right
        }
      } 
    }

    return this
  }

  find(val) {
    if (!this.root) return false

    let current = this.root
    while (true) {
      if (val === current.val) return true

      if (val < current.val) {
        if (!current.left) return false
        current = current.left
      } else {
        if (!current.right) return false
        current = current.right
      }
    }
  }

  breadthTraverse() {
    let q = []
    let data = []
    let node = this.root

    q.push(node)

    while (q.length) {
      node = q.shift()
      data.push(node.val)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
    
    return data
  }

  preOrderTraverse() {
    let data = []

    function traverse(node) {
      data.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return data
  }

  postOrderTraverse() {
    let data = []

    function traverse(node) {
      if(node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.val)
    }

    traverse(this.root)
    return data
  }

  inOrderTraverse() {
    let data = []

    function traverse(node) {
      if(node.left) traverse(node.left)
      data.push(node.val)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return data
  }
}

const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(40)
tree.insert(5)
tree.insert(2)
tree.insert(6)
tree.insert(20)
tree.insert(50)
console.log("Tree :", tree.root);
console.log("Breadth Traverse: ", tree.breadthTraverse());
console.log("PreOrder Traverse: ", tree.preOrderTraverse());
console.log("PostOrder Traverse: ", tree.postOrderTraverse());
console.log("InOrder Traverse: ", tree.inOrderTraverse());
