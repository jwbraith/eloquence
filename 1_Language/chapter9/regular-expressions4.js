function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3"));
console.log(stripComments("x = 10;// ten!"));
console.log(stripComments("1 /* a */+/* b */ 1"));

function stripComments2(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComments2("1 + /* 2 */3"));
console.log(stripComments2("x = 10;// ten!"));
console.log(stripComments2("1 /* a */+/* b */ 1"));
let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(' + name + ')\\b", "gi");
console.log(text.replace(regexp, "_$1_"));

console.log("  word".search(/\S/));
console.log("    ".search(/\S/));
console.log();
let input = "A string with 3 numbers in it... 42 and 89.";
console.log(input);
let number = /\b\d+\b/g;
let match;
while (match = number.exec(input)) {
  console.log("Found", match[0], "at", match.index);
}
