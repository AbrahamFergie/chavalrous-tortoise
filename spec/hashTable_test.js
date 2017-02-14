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
      const ht = new HashTable()
      ht.put('name', 'frankenstein')
      ht.put('19.0', 'stein')
      expect(ht.contains('19.0')).to.be.true
    })
  })

  context('get()', () => {
    it('returns the data associated with key.', () => {
      const ht = new HashTable()
      ht.put('name', 'frankenstein')
      ht.put('19.0', 'stein')
      ht.put('wsqe', 'frank')
      ht.put('tomp', 'more data')
      ht.put('separate', 'hashes')
      ht.put('difdeaaat', 'another one')
      expect(ht.get('separate')).to.eql('hashes')
      expect(ht.get('wsqe')).to.eql('frank')
      expect(ht.get('difdeaaat')).to.eql('another one')
    })
  })

  context('iterator()', () => {
    it.only('takes a callback function and passes it each key and value in sequence.', () => {
      const ht = new HashTable()
      let sum = 0
      ht.put('name', 2)
      ht.put('19.0', 3)
      ht.put('wsqe', 4)
      ht.put('tomp', 6)
      ht.put('separate', 12)
      ht.put('difdeaaat', 31)
      ht.iterator(function(key, data){ sum += data })
      expect(sum).to.equal(58)
    })
  })

  context('remove()', () => {
    it('removes a key-value pair by key.', () => {
      const ht = new HashTable()
      ht.put('name', 'frankenstein')
      ht.put('19.0', 'stein')
      ht.put('wsqe', 'frank')
      ht.put('tomp', 'more data')
      ht.put('separate', 'hashes')
      ht.put('difdeaaat', 'another one')
      expect(ht.contains('tomp')).to.be.true
      expect(ht.contains('name')).to.be.true
      ht.remove('tomp')
      ht.remove('name')
      expect(ht.contains('tomp')).to.be.false
      expect(ht.contains('name')).to.be.false
    })
  })

})
