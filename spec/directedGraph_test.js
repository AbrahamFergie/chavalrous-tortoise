import chai, { expect } from 'chai'
import chaiChange from 'chai-change'

import DirectedGraph from '../src/DirectedGraph'

chai.use(chaiChange)

describe('DirectedGraph', () => {
  const myGraph = new DirectedGraph()
  let vertices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p']
  let directions = [{vertex1:'a', vertex2:'b', weight:1},{vertex1:'a', vertex2:'c', weight:3},{vertex1:'a', vertex2:'d', weight:2},
  {vertex1:'b', vertex2:'e', weight:2},{vertex1:'b', vertex2:'f', weight:3},
  {vertex1:'b', vertex2:'g', weight:1},{vertex1:'b', vertex2:'l', weight:2},
  {vertex1:'c', vertex2:'i', weight:3},{vertex1:'d', vertex2:'j', weight:2},
  {vertex1:'d', vertex2:'d', weight:3},{vertex1:'e', vertex2:'m', weight:2},
  {vertex1:'f', vertex2:'n', weight:3},{vertex1:'g', vertex2:'m', weight:1},
  {vertex1:'g', vertex2:'o', weight:1},{vertex1:'h', vertex2:'m', weight:2},
  {vertex1:'h', vertex2:'p', weight:2},{vertex1:'h', vertex2:'q', weight:1},
  {vertex1:'i', vertex2:'r', weight:2},{vertex1:'j', vertex2:'k', weight:3}]

  it('exists', () => {
    expect(DirectedGraph).to.be.a('function')
  })

  context('addVertex() && hasVertex()', () => {
    it('adds a vertex to the graph.', () => {
      myGraph.insertVertices(vertices)
      expect(myGraph.hasVertex('d')).to.be.true
    })
  })

  context('addDirection() && hasDirection()', () => {
    it.only("adds a direction from 'v1' to 'v2' with a weight (number).", () => {
      myGraph.insertVertices(vertices)
      myGraph.insertDirections(directions)
      // myGraph.printGraph(vertices)
      expect(myGraph.hasDirection('h', 'p')).to.be.true
      expect(myGraph.hasDirection('z', 'a')).to.equal(null)
    })
  })

  context('getDirectionWeight()', () => {
    it("returns direction weight between v1 & v2 or null if no direction exists.", () => {
      myGraph.insertVertices(vertices)
      myGraph.insertDirections(directions)
      expect(myGraph.getDirectionWeight('d', 'j')).to.equal(2)
      expect(myGraph.getDirectionWeight('q', 'z')).to.equal(null)
    })
  })
})
