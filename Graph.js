class Graph {
  constructor() {
    this.adjList = {}; // key: vertex, value: array of neighbors
  }

  // Add a vertex
  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  // Add edge (undirected by default)
  addEdge(v1, v2) {
    if (!this.adjList[v1]) this.addVertex(v1);
    if (!this.adjList[v2]) this.addVertex(v2);
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  // Remove an edge
  removeEdge(v1, v2) {
    this.adjList[v1] = this.adjList[v1].filter(n => n !== v2);
    this.adjList[v2] = this.adjList[v2].filter(n => n !== v1);
  }

  // Remove a vertex
  removeVertex(vertex) {
    for (let neighbor of this.adjList[vertex]) {
      this.removeEdge(vertex, neighbor);
    }
    delete this.adjList[vertex];
  }

  // Breadth-First Search
  bfs(start) {
    const result = [];
    const queue = [start];
    const visited = new Set();

    visited.add(start);

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      for (let neighbor of this.adjList[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  // Depth-First Search (Recursive)
  dfsRecursive(start, visited = new Set(), result = []) {
    visited.add(start);
    result.push(start);

    for (let neighbor of this.adjList[start]) {
      if (!visited.has(neighbor)) {
        this.dfsRecursive(neighbor, visited, result);
      }
    }

    return result;
  }

  // Depth-First Search (Iterative)
  dfsIterative(start) {
    const stack = [start];
    const visited = new Set();
    const result = [];

    visited.add(start);

    while (stack.length) {
      const vertex = stack.pop();
      result.push(vertex);

      for (let neighbor of this.adjList[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }

    return result;
  }
}
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

console.log("Adjacency List:", graph.adjList);

// Traversals
console.log("BFS:", graph.bfs("A")); // A B C D
console.log("DFS Recursive:", graph.dfsRecursive("A")); // A B D C
console.log("DFS Iterative:", graph.dfsIterative("A")); // A C B D (order may vary)
