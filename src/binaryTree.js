class TreeNode{
  constructor(data){
    this.data = data,
    this.prev = null,
    this.left = null,
    this.right = null
  }
}

export default class BinaryTree{
  constructor(){
    this.numOfTreeNodes = 1,
    this.firstCenterNode = new TreeNode(1),
    this.tree = this.firstCenterNode
  }

  //recursive function to locate appropriate spot for new node.
  newNodePlacement(data, node, newNode){
    if(data > node.data || node.data === null){
      if(node.right === null){
        newNode.prev = node
        return node.right = newNode
      }else{
        node = node.right
        return this.newNodePlacement(data, node, newNode)
      }
    }else{
      if(node.left === null){
        newNode.prev = node
        return node.left = newNode
      }else{
        node = node.left
        return this.newNodePlacement(data, node, newNode)
      }
    }
  }
  //recursion function to find a specific node
  findNode(data, node){
    if(data === node.data){
      return node
    }else if(data > node.data){
      if(node.right === null){
        return null
      }else{
        node = node.right
        return this.findNode(data, node)
      }
    }else if(data < node.data){
      if(node.left === null){
        return null
      }else{
        node = node.left
        return this.findNode(data, node)
      }
    }
  }
  //walks the tree and finds where its place is amongst the other tree nodes and is inserted accordingly.
  insert(data){
    let currentNode = this.firstCenterNode
    let newNode = new TreeNode(data)
    this.newNodePlacement(data, currentNode, newNode)
    this.numOfTreeNodes++
  }
  //traverses the tree locating a specific TreeNode or returns null.
  search(nodeData){
    let currentNode = this.firstCenterNode
    return this.findNode(nodeData, currentNode)
  }
  //removes a values node from the tree.
  remove(data){
    let currentNode = this.firstCenterNode
    let node = this.findNode(data, currentNode)
    if(node.right){
      node.prev.right = node.right

    }else if(node.left){
      node.prev.left = node.left
    }
  }
  //receives a method of traversal, a callback function and an optional node
  traverse(method, callback, node){
    //in-order = go node by node down the tree using the callback function on the node data
    if(method === 'in-order'){
      if(node === undefined){
        let node = this.firstCenterNode
        callback(node.data)
        if(node.left !== null){
          this.traverse(method, callback, node.left)
        }
        if(node.right !== null){
          this.traverse(method, callback, node.right)
        }
      }else{
        callback(node.data)
        if(node.left !== null){
          this.traverse(method, callback, node.left)
        }
        if(node.right !== null){
          this.traverse(method, callback, node.right)
        }
      }
    }else if(method === 'pre-order'){

    }else if(method === 'post-order'){

    }
    //pre-order = enacts callback function on node data then recursive call to both left and right
    //post-order = recursive call to left and right then enacts callback function on node data
  }
  //returns the total number of tree nodes in the tree
  count(){
    return this.numOfTreeNodes
  }
}
