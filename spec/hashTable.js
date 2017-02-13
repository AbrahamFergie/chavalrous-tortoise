import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hashTable'

chai.use(chaiChange)

describe('hashTable', () => {
  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  context('put()', () => {
    it('adds a key-value pair to the hash table.', () => {
      const myHash = new HashTable()

      
    })
  })

})
