// The Sum of a Range
let range = (start, end, step = 1) => {
  let rangeOfNum = [];
  if (end > start) {
    for (let i = start; i <= end; i += step) {
      rangeOfNum.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      rangeOfNum.push(i);
    }
  }

  return rangeOfNum;
}
console.log(range(5, 2, -1));

let sum = (summands) => {
  let total = 0;
  summands.forEach(element => {
    total += element;
  });
  return total;
}
console.log(sum(range(1, 10))); // 55

// Reversing an Array
let reverseArray = (arr) => {
  let retArr = [];
  for (let i = 0; i < arr.length; i++) {
    retArr[i] = arr[arr.length - (1 + i)];
  }
  return retArr;
}
let example = [12, 24, 48, 96, 192];
console.log(reverseArray(example));

let reverseArrayInPlace = (arr) => {
  let revArr = [];
  for (let i = 0; i < arr.length; i++) {
    revArr.unshift(arr[i]);
  }
  for (let i = 0; i < revArr.length; i++) {
    arr[i] = revArr[i];

  }
  return arr;
}
console.log(example);
console.log(reverseArrayInPlace(example));

// A List (A list?)
let arrayToList = (arr) => {
  let list = {};
  list.value = arr.shift();
  if (arr.length > 0) {
    list.rest = arrayToList(arr);
  } else {
    list.rest = null;
  }
  return list;
}
console.log(arrayToList([1, 2, 3]));