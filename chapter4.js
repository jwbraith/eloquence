// The Sum of a Range
let range = (start, end) => {
  let rangeOfNum = [];
  for (let i = start; i <= end; i++) {
    rangeOfNum.push(i);
  }
  return rangeOfNum;
}

let sum = (summands) => {
  let total = 0;
  summands.forEach(element => {
    total += element;
  });
  return total;
}
console.log(sum(range(1, 10))); // 55