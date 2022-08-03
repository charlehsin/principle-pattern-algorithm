// Use Adjacency List to represent a graph.
// We only implement the necessary methods to create a graph.

class Vertex {
  constructor(value) {
    this.value = value;
    this.adjacentVertices = [];
  }

  getAdjacentVertexValues = () => {
    return this.adjacentVertices.map(vertex => vertex.value);
  };

  getAdjacentVertices = () => {
    return this.adjacentVertices;
  };

  addAdjacentVertex = (vertex) => {
    if (this.adjacentVertices.indexOf(vertex) < 0) {
      this.adjacentVertices.push(vertex);
    }
  };
}

class Graph {
  constructor(isDirected) {
    this.vertices = new Map();
    this.isDirected = isDirected;
  }

  addVertex = (value) => {
    if (this.vertices.has(value)) {
      return this.vertices.get(value);
    }

    const vertex = new Vertex(value);
    this.vertices.set(value, vertex);
    return vertex;
  };

  addEdge = (sourceValue, destinationValue) => {
    const sourceVertex = this.addVertex(sourceValue);
    const destinationVertex = this.addVertex(destinationValue);
    sourceVertex.addAdjacentVertex(destinationVertex);
    if (this.isDirected === false) {
      destinationVertex.addAdjacentVertex(sourceVertex);
    }
  };

  getVertex = (value) => {
    if (this.vertices.has(value)) {
      return this.vertices.get(value);
    }

    return undefined;
  };

  printGraph = () => {
    this.vertices.forEach((value, key) => {
      console.log(`Adjacent list for ${key}: ${value.getAdjacentVertexValues()}`); // 👉️ Chile country, 30 age
    });
  };
}

// Breadth First Search

const bfs = (graph, startValue) => {
  console.log(`BFS starting value: ${startValue}`);

  // BFS will use FIFO queue.
  const queue = [];

  // The index of the visited array is the vertex value.
  const visited = [];
  // The index of the levels array is the vertex value.
  const levels = [];

  const startVertex = graph.getVertex(startValue);
  if (!startVertex) {
    console.log(`${startValue} cannot be found in the graph.`)
    return;
  }

  // Add to the end of the queue.
  queue.push(startVertex);

  // Mark this as visited.
  visited[startValue] = true;

  // The starting level is 0;
  levels[startValue] = 0;

  while (queue.length > 0) {
    // Retrieve the first element from the queue.
    const currentVertexToCheck = queue.shift();

    console.log(`BFS gets vertex: ${currentVertexToCheck.value}.`);

    // For each adjacent vertices
    currentVertexToCheck.getAdjacentVertices().forEach(vertex => {
      if (!visited[vertex.value]) {
        // This is not visited yet.

        // Add the adjacent vertices to the end of the queue.
        queue.push(vertex);

        // Mark this as visited.
        visited[vertex.value] = true;

        // The level is the previous level + 1.
        levels[vertex.value] = levels[currentVertexToCheck.value] + 1;
      }
    });
  }

  console.log('BFS is done.');
  for (let i = 0; i < levels.length; i++) {
    if (levels[i] !== undefined) {
      console.log(`Vertex: ${i} has level: ${levels[i]}.`);
    }
  }
};

// Depth First Search

const dfs = (graph, startValue) => {
  console.log(`DFS starting value: ${startValue}`);

  // DFS will use LIFO stack.
  const stack = [];

  // The index of the visited array is the vertex value.
  const visited = [];

  const startVertex = graph.getVertex(startValue);
  if (!startVertex) {
    console.log(`${startValue} cannot be found in the graph.`)
    return;
  }

  // Add to the end of the stack.
  stack.push(startVertex);

  // Mark this as visited.
  visited[startValue] = true;

  while (stack.length > 0) {
    // Retrieve the last element from the stack.
    const currentVertexToCheck = stack.pop();

    console.log(`DFS gets vertex: ${currentVertexToCheck.value}.`);

    // For each adjacent vertices
    currentVertexToCheck.getAdjacentVertices().forEach(vertex => {
      if (!visited[vertex.value]) {
        // This is not visited yet.

        // Add the adjacent vertices to the end of the stack.
        stack.push(vertex);

        // Mark this as visited.
        visited[vertex.value] = true;
      }
    });
  }

  console.log('DFS is done.');
};

console.log('Creating undirected graph...');
const graph = new Graph(false);
graph.addEdge(1, 3);
graph.addEdge(1, 5);
graph.addEdge(1, 9);
graph.addEdge(3, 2);
graph.addEdge(3, 4);
graph.addEdge(2, 3);
graph.addEdge(5, 4);
graph.addEdge(4, 9);
graph.addEdge(9, 6);
graph.addEdge(6, 7);
graph.printGraph();

bfs(graph, 1);

dfs(graph, 1);
