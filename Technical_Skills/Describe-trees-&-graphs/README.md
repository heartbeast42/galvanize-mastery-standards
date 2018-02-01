#Describe trees & graphs
* Verbally describe trees and graphs

Trees and graphs are data structures that show "relationships" by drawing lines between "nodes".  A node represents some piece of data and is usually represented visually with a circle.  
* Tree
  * A tree can take several forms but always describes some kind of hierarchy where there is a "root" node at the top and other nodes branching off there can be as many nodes branching off the root as are needed to represent the data. each node in turn can have other branches leading to other nodes.  Each node can have only one "parent node" which branches to the node and as many "child nodes" as needed.  A node can not have a parent or grandparent node as its child nor can it have a child node that is a grandchild node of any node (including itself) of its generation can you be your own grandpa.
* Graphs
  * A graph is like a tree in terms of drawing lines between nodes to show their relationships however while there may be a "starting point", "origin" or "root node", there is not necessarily one, in other words.  Graphs may contain hierarchies, but they may not.  In turn graphs may contain trees or they may not.  Graphs are capable of describing relationships between datapoint that have some level of independence from one another. Thus nodes in graphs may or may not be related to any other node anywhere else in the graph.  Graphs are capable of showing cyclical relationships between nodes like.
  `nodeA --(to)-> nodeB --(to)-> nodeC --(back to the start)-> nodeA`
