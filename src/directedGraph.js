import chalk from 'chalk'

export default class DirectedGraph{
  constructor(){
    this.vertices = 0,
    this.edges = [],
    this.edgeCounter = 0
  }
  //inserts the vertices into the directed graph
  insertVertices(vertices){
    for( let i = 0; i < vertices.length; i++ ){
      this.addVertex(vertices[i])
      this.edges[vertices[i]].push(vertices[i])
    }
  }
  //inserts the directions into the directed graph
  insertDirections(directions){
    for( let i = 0; i < directions.length; i++ ){
      this.addDirection(directions[i].vertex1, directions[i].vertex2, directions[i].weight)
    }
  }
  //adds a vertexical point on a directed graph
  addVertex(vertex){
    this.edges[vertex] = []
    this.vertices++
  }

  //checks if a vertex exists on the directed graph
  hasVertex(vertex){
    for(let i = 0; i < this.vertices; i++){
      if(this.edges[i] === vertex){
        return true
      }
    }
    return false
  }
  //adds a vector connecting given vertices with a weight attached
  addDirection(vertex1, vertex2, weight){
    // console.log(this.edges[vertex1])
    this.edges[vertex1].push({vertex1:vertex1, vertex2:vertex2, weight:weight})
  }
  //checks the directed graph if it has a particular direction
  hasDirection(vertex1, vertex2, dir){
    let currentVertex = this.edges[vertex1]
    if(currentVertex === undefined){ return null }
    let numOfDirs = currentVertex.length - 1
    if(dir === undefined){
      let dir = 1
      if(currentVertex[dir].vertex2 === vertex2){
        return true
      }else{
        dir++
        return this.hasDirection(vertex1, vertex2, dir)
      }
    }else{
      if(currentVertex[dir].vertex2 === vertex2){
        return true
      }else{
        if(dir > numOfDirs){
          return false
        }else{
          dir++
          return this.hasDirection(vertex1, vertex2, dir)
        }
      }
    }
  }
  //finds the vector connecting the two vertices and retrieves the weight value
  getDirectionWeight(vertex1, vertex2){
    let currentVertex = this.edges[vertex1]
    if(currentVertex === undefined){ return null }
    if(currentVertex[1].vertex2 === vertex2){
      return currentVertex[1].weight
    }else{
      return null
    }
  }
  //goes to particular vertices and enacts a callback function on them
  visit(vertex, callback){}
  //calculates the shortest path between two vertices
  findShortestPath(vertex1, vertex2){}
  //removes a vector connecting two vertices
  removeDirection(vertex1, vertex2){}
  //returns an array of all all free floating vertices
  getSeparatedVertices(){}
  //removes a particular vertex and all its directions
  removeVertex(vertex){}
  //returns the number of edges
  count(){ return this.vertices }
  //sketches an instance of the directed graph in its current state
  printGraph(v) {
    for ( var i = 0; i < this.vertices; ++i) {
      console.log(chalk.black.bgYellow(this.edges[v[i]][0]) + '->\n')
      for (  var j = 0; j < this.edges[v[i]].length; j++ ) {
        if ( this.edges[v[i]][j].vertex2 != undefined )
          console.log( chalk.black.bgWhite(this.edges[v[i]][j].vertex2) + ' ' + chalk.black.bgWhite(this.edges[v[i]][j].weight))
          // console.log('direction', this.edges[v[i]])
          if(j === this.edges[v[i]].length - 1){ console.log('\n') }
      }
      '\n'
    }
  }
}
