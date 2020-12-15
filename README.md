# eloquence
going through the eloquent javascript book over the holidays

### Chapter 2: Program Structure

```javascript
// Looping a Triangle
let triangle = "";
do {
  triangle += "#";
  console.log(triangle);
} while (triangle.length < 8);
```

```javascript
// Fizzbuzz
for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log("fizzbuzz");
  } else if (i % 5 == 0) {
    console.log("fizz");
  } else if (i % 3 == 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
```

```javascript
//Chessboard
let size = 8;
let board = "";

for (let j = 0; j < size; j++) {
  if (j % 2 == 0) {
    for (let i = 0; i < size; i++) {
      if (i % 2 == 0) {
        board += "#";
      } else {
        board += " ";
      }
    }
  } else {
    for (let i = 0; i < size; i++) {
      if (i % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
  }
  board += "\n"
}
console.log(board);
```

### Chapter 3: Functions

```javascript
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
```

```javascript
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
```

```javascript
// Bean Counting
let word = "Beanboozled";
let char = 'o'
let countChar = (word, char) => {
  let numOfChar = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == char) {
      numOfChar++;
    }
  }
  return numOfChar;
}
console.log(word + " has " + countChar(word, char) + " many \"" + char + "\"s");
```

### Chapter 4: Objects & Arrays

```javascript
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
```