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
let arr123 = [1, 2, 3];
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
let list123 = (arrayToList(arr123));
console.log("the resultant list is ");
console.log(list123);

let listToArray = (list) => {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}
console.log("the list turned back into an array is ");
console.log(listToArray(list123));

let prepend = (element, inputList) => {
  let list = { element, rest: inputList };
  return list;
}
list123 = prepend(6, list123);
console.log("after prepending the list is ");
console.log(list123);

let nth = (list, num) => {
  if (!list) {
    return undefined;
  } else if (num == 0) {
    return list.value;
  } else {
    return nth(list.rest, num - 1);
  }
}
console.log(nth(list123, 3));