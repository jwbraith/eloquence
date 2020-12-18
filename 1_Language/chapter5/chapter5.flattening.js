// Flattening
let arrays = [[1, 2, 3], [4, 5], [6, 7]];
let reduced = arrays.reduce((a, b) => a.concat(b));
console.log(reduced);
