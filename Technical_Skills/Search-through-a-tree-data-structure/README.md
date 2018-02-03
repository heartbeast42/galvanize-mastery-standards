#Search through a tree data-structure
<!-- Casey is talking to Brooks about this one for me -->
* Write the algorithm for Depth First Search
* Write the algorithm for Breadth First Search

* Please see this link whee I go into detail about stacks and queues, FIFO and LIFO and how they relate to DFS(depth first search) and BFS(breadth first search).
  * https://github.com/ClarkWalker/galvanize-mastery-standards/tree/master/Technical_Skills/Describe-stacks-%26-queues

* algorithm for Depth First Search
  * a really simple description is always follow the left or right wall. pick one and stick with it.

  function dfs(node) {
    if (node = null) {
      return
    }
    dfs(node.left)
    dfs(node.right)
  }

* algorithm for Breadth First Search
  * The simple way is to check all the nodes on the same level before moving on to the next level

  function bfs(node) {
    let q
    while (q.length > 0) {
      q.push(node)
      node = q.shift()
    }
    return
  }



  *
  *
  *
  *
  *
  *
  *
