// Minimum
let minuo = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(minuo(22, 33));
console.log(Math.min(22, 33));

// Recursion
let isEven = (n) => {
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
}
console.log(isEven(50));
console.log(isEven(65));