console.log("Question mark makes pattern part optional");
let neighbour = /neighbou?r/;
console.log("neighbour.test('neighbour')");
console.log(neighbour.test('neighbour'));
console.log("neighbour.test('neighbor')");
console.log(neighbour.test('neighbor'));
console.log();

console.log("To use an operator like * or + on more than one element ('char') at a time, need to use parens");
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoohoooohooohoo"));
console.log("/i/ indicates case-insensitivity");

let match = /(\d+)/.exec("one two 100, buckle my shoe 222");
console.log(match);
console.log(match.index);

console.log(new Date());