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
      expect(ht.size()).to.equal(1)
      ht.put('19.0', 'stein')
      expect(ht.size()).to.equal(2)
      ht.put('wsqe', 'frank')
      ht.put('tomp', 'more data')
      ht.put('separate', 'hashes')
      ht.put('difdeaaat', 'another one')
      expect(ht.contains('tomp')).to.be.true
      let stuff = ht.hashFunction('difdeaaat')
    })
  })


  context('get()', () => {
    it('returns the data associated with key.', () => {
      const ht = new HashTable()
      ht.put('name', 'frankenstein')
      expect(ht.size()).to.equal(1)
      ht.put('19.0', 'stein')
      expect(ht.size()).to.equal(2)
      ht.put('wsqe', 'frank')
      ht.put('tomp', 'more data')
      ht.put('separate', 'hashes')
      ht.put('difdeaaat', 'another one')
      console.log(ht.dataStore)
      expect(ht.get('separate')).to.eql('hashes')
      expect(ht.get('wsqe')).to.eql('frank')
      expect(ht.get('difdeaaat')).to.eql('another one')
    })
  })

  context('iterator()', () => {
    it('takes a callback function and passes it each key and value in sequence.', () => {
      const ht = new HashTable()
      ht.put('name', 'frankenstein')
      expect(ht.size()).to.equal(1)
      ht.put('19.0', 'stein')
      expect(ht.size()).to.equal(2)
      ht.put('wsqe', 'frank')
      ht.put('tomp', 'more data')
      ht.put('separate', 'hashes')
      ht.put('difdeaaat', 'another one')
      ht.iterator(function(key, data){console.log(key, data)})
    })
  })

  context('remove()', () => {
    it('removes a key-value pair by key.', () => {
      const ht = new HashTable()
      ht.put('name', 'frankenstein')
      expect(ht.size()).to.equal(1)
      ht.put('19.0', 'stein')
      expect(ht.size()).to.equal(2)
      ht.put('wsqe', 'frank')
      ht.put('tomp', 'more data')
      ht.put('separate', 'hashes')
      ht.put('difdeaaat', 'another one')
      expect(ht.contains('tomp')).to.be.true
      ht.remove('tomp')
      ht.remove('name')
      expect(ht.contains('tomp')).to.be.false
      expect(ht.contains('name')).to.be.false
    })
  })

})
