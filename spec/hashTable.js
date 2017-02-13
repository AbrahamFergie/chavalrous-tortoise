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
<<<<<<< Updated upstream
      const myHash = new HashTable()

      
=======
      const ht = new HashTable()
      ht.put('name', 'frankenstein')
      expect(ht.size()).to.equal(1)
      ht.put('19.0', 'stein')
      expect(ht.size()).to.equal(2)
      ht.get('19.0')
      // expect(ht.get('19.0')).to.eql('stein')
>>>>>>> Stashed changes
    })
  })

})
