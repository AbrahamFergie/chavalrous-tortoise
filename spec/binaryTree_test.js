import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinaryTree from '../src/binaryTree'

chai.use(chaiChange)

describe('binaryTree', () => {
  it('exists', () => {
    expect(BinaryTree).to.be.a('function')
  })

  context('insert()', () => {
    it('inserts a node with the specified value into the tree.', () => {
      const myTree = new BinaryTree()
      myTree.insert(10)
      myTree.insert(4)
      expect(myTree.count()).to.equal(3)
      myTree.insert(6)
      myTree.insert(8)
      expect(myTree.count()).to.equal(5)
    })
  })

  context('search()', () => {
    it('returns a node object or null if not found.', () => {
      const myTree = new BinaryTree()
      myTree.insert(10)
      myTree.insert(4)
      myTree.insert(6)
      myTree.insert(8)
      expect(myTree.search(6).right.data).to.equal(8)
      expect(myTree.search(4).right.data).to.equal(6)
      expect(myTree.search(3)).to.equal(null)
    })
  })

  context('remove()', () => {
    it("removes an value's node (if exists) from the tree.", () => {
      const myTree = new BinaryTree()
      myTree.insert(10)
      myTree.insert(4)
      myTree.insert(6)
      myTree.insert(8)
      myTree.remove(6)
      expect(myTree.search(6)).to.equal(null)
    })
  })

  context('traverse()', () => {
    it("traverse the tree in the defined order (either 'preOrder', 'inOrder', or 'postOrder') and apply function on each node's value.", () => {
      const myTree = new BinaryTree()
      myTree.insert(10)
      myTree.insert(4)
      myTree.insert(6)
      myTree.insert(8)
      myTree.insert(15)
      myTree.insert(11)
      myTree.insert(5)
      myTree.insert(20)
      myTree.traverse('in-order', (data) => console.log(data))
      console.log(myTree.tree)
    })
  })
  

})
