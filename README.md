# chavalrous-tortoise

Advanced Data Structures

Hash Table

Maps keys to values, like a dictionary or a phone book. Or an object in JavaScript...

From Wikipedia [edited]:

A data structure used to implement an associative array, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
const ht = new HashTable()
ht.put("name", "Zanzibar")  // adds a key-value pair to the hash table.
ht.get("name")              // returns the data associated with key.
ht.contains("name")         // returns true if the hash table contains the key.
ht.iterate((k, v) => console.log(`${k}: ${v}`)) // takes a callback function and passes it each key and value in sequence.
ht.remove("name")           // removes a key-value pair by key.
ht.size()                   // returns the number of key-value pairs in the hash table.
HashTable.hash("name")      // generates a hash for the key "name"
Binary Search Tree

Maps keys to values, like a dictionary or a phone book. Or an object in JavaScript...

From Wikipedia [edited]:

A particular type of container that allows fast lookup, addition and removal of items, and can be used to implement either dynamic sets of items, or lookup tables that allow finding an item by its key (e.g., finding the phone number of a person by name).

Binary search trees keep their keys in sorted order, so that lookup and other operations can use the principle of binary search: when looking for a key in a tree (or a place to insert a new key), they traverse the tree from root to leaf, making comparisons to keys stored in the nodes of the tree and deciding, based on the comparison, to continue searching in the left or right subtrees.
const bst = new BinarySearchTree()
bst.insert(3)  // inserts a node with the specified value into the tree.
bst.search(3)  // returns a node object or null if not found.
bst.remove(3)  // removes an value's node (if exists) from the tree.
bst.traverse('inOrder', (val) => console.log(val)) // traverse the tree in the defined order (either 'preOrder', 'inOrder', or 'postOrder') and apply function on each node's value.
bst.count()    // return the number of nodes in the tree.
Directed Graph

Nodes connected by vertices with a direction.

From Wikipedia [edited]:

A graph (that is a set of vertices connected by edges), where the edges have a direction associated with them.
const diGraph = new DirectedGraph()
diGraph.addVertex('v1')               // adds a vertex to the graph.
diGraph.hasVertex('v1')               // returns true if the graph contains the vertex or false if not.
diGraph.addDirection('v1', 'v2' , 3)  // adds a direction from 'v1' to 'v2' with a weight (number).
diGraph.hasDirection('v1', 'v2')      // returns true if there's a direction from 'v1' to 'v2'.
diGraph.getDirectionWeight('v1', 'v2') // returns direction weight between v1 & v2 or null if no direction exists.
diGraph.visit( 'v1', vertex => console.log(vertex)) // visit all the connected vertices in the graph starting with v1 and apply function on the reached vertex.
diGraph.findShortestPath('v1', 'v2')  // returns an array of all the shortest paths between two vertices based on the sum of weights.
diGraph.removeDirection('v1', 'v2')   // removes an existing direction between 'v1' and 'v2'.
diGraph.getSeparatedVertices()        // returns an array of all the vertices that are separated from the graph.
diGraph.removeVertex('v1')            // removes an existing vertex and all its directions (the incoming and outgoing).
diGraph.count()                       // returns the number of vertices in the graph.
