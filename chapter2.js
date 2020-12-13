// Looping a Triangle
let triangle = "";
do {
  triangle += "#";
  console.log(triangle);
} while (triangle.length < 8);

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