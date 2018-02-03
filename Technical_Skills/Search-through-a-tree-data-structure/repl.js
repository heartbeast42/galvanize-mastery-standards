function bfs(node) {
  let q = [];
  while (q.length > 0) {
    console.log(q);
    q.push(node);
    node = q.shift();
  }
  return;
}
bfs();
