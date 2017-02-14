class Node{
  constructor(key, data) {
    this.key = key,
    this.data = data,
    this.next = null
  }
}

export default class Hashtable{
  constructor(){
    this._length = 0,
    this.dataStore = []
  }

  //takes a key and returns a hash number which will be where the hash will live.
  hashFunction(key){
    let sum = 0
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i)
    }
    return sum % 31
  }
  //get the number of hashes in your hash table.
  size(){ return this._length }


  //creates a new hash or chains off an existing hash.
  put(key, data){
    let newNode = new Node(key, data)
    let hash = this.hashFunction(key)
    //see if hash # exists on the hash table.
    if(!this.dataStore[hash]){
      //if it doesnt, create a new hash index in the table and put data there.
      this.dataStore[hash] = newNode
    }else{
      //otherwise chain off the lead hash into a linkedlist.
      this.chain(key, data, hash, newNode)
    }
    ++this._length
  }

  get(key){
    let hash = this.hashFunction(key)
    //finds the indexed hash number and looks at the key to locate the correct node.
    if(this.dataStore[hash]){
      let currentNode = this.dataStore[hash]
      if(currentNode.key === key){
        //returns that node's data.
        return currentNode.data
      }else{
        while(currentNode.next){
          if(currentNode.key === key){
            //returns that node's data.
            return currentNode.data
          }else{
            currentNode = currentNode.next
          }
        }
        if(currentNode.key === key){
          //returns that node's data.
          return currentNode.data
        }else{
          return "sorry your data is not here"
        }
      }
    }
  }

  //creates a linked-list at that designated hash location.
  chain(key, data, hash, newNode){
    let currentNode = this.dataStore[hash]
    //set that next to the new node that is created.
    if(!currentNode.next){
      currentNode.next = newNode
    }else{
      while(currentNode.next){
        //iterate through the linkedlist until you reach a node whos next is null.
        if(currentNode.key === key){
          return currentNode.data = data
        }else{
          currentNode = currentNode.next
        }
      }
      currentNode.next = newNode
    }
  }

  //checks if a given key exists on a hash table.
  contains(key){
    let hash = this.hashFunction(key)
    let currentNode = this.dataStore[hash]
    //returns a boolean that state whether or not the hashtable contains that key.
    if(this.dataStore[hash]){
      while(currentNode.next){
        if(currentNode.key === key){
          return true
        }else{
          currentNode = currentNode.next
        }
      }
      if(currentNode.key === key){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  }

  //iterates throughout the hash table using a callback function on each hash and hash chain.
  iterator(callback){
    let i = 0
    //moves throughout the hashtable in a determined fashion.
    let currentNode = this.dataStore
    while(i < this.dataStore.length){
      if(currentNode[i]){
        callback(currentNode[i].key, currentNode[i].data)
        while(currentNode[i].next){
          callback(currentNode[i].next.key, currentNode[i].next.data)
          currentNode[i] = currentNode[i].next
        }
      }
      i++
    }
  }

  //finds the designated hash in the table if it exists, them removes hash without breaking chains.
  remove(key){
    let toBeDeleted
    let hash = this.hashFunction(key)
    //moves throughout the hashtable to find a specific hash by its key.
    if(this.dataStore[hash]){
      let currentNode = this.dataStore[hash]
      if(currentNode.key === key){
        //removes that hash from the table without breaking any other connections.
        this.dataStore[hash] = currentNode.next
      }else{
        while(currentNode.next){
          if(currentNode.next.key === key){
            currentNode.next = currentNode.next.next
          }else{
            currentNode = currentNode.next
          }
        }
      }

    }else{
      return "does not exist on table"
    }
  }

}
