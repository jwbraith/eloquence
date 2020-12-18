//choice patterns
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("16 pigs"));
console.log(animalCount.test("15 pigeons"));
console.log();

console.log("papa".replace('p', 'm'));
console.log("Borobudur".replace(/[ou]/, "a"));
console.log("Borobudur".replace(/[ou]/g, "a"));

let nameList = "Liskov, Barbara\nMcCarthy, John\nWadler, Philip";
console.log(nameList);
console.log("now using replace method to swap names around");
console.log(nameList.replace(/(\w+), (\w+)/g, "$2 $1"));

let s = "the cia and the fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));
console.log('\nAnother example: ')
let stock = "1 lemon, 2 cabbages, and 1001 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) { // only one left, remove the 's
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));