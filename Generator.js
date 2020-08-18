function* gen(i) {
  yield i;
  yield i + 5;
  return 25;
}

let g = gen(5);
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
