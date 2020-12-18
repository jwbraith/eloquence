let re1 = new RegExp("abc");
let re2 = /abc/;

let blather = "The deep shame of the abcedenarian";

console.log("/abc/.test('abcde')");
console.log(/abc/.test('abcde'));
console.log("/abc/.test('abxde')");
console.log(/abc/.test('abxde'));
console.log();

console.log("/[0123456789]/.test('in 1992')");
console.log(/[0123456789]/.test('in 1992'));
console.log("/[0-9]/.test('in 1992')");
console.log(/[0-9]/.test('in 1992'));
console.log();

console.log("matching with one or more digit chars");
console.log("/\d+/.test('123')");
console.log(/\d+/.test('123'));
console.log("matching with one or more digit chars");
console.log("/\d+/.test('')");
console.log(/\d+/.test(''));
console.log("matching with zero or more digit chars");
console.log("/\d*/.test('')");
console.log(/\d*/.test(''));