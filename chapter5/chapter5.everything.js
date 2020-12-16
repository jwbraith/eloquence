// Everything
let arr = [12, 13, 14, 15, 17, 19, 23];
console.log(arr.some(n => n % 2 == 0));
console.log(arr.every(n => n % 2 == 0));

function every1(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}
console.log(every1(arr, n => n % 2 == 0));

function every2(array, test) {
  return !array.some(element => !test(element));
}
console.log(every2(arr, n => n % 2 == 0));