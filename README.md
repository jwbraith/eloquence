# eloquence
going through the eloquent javascript book over the holidays

## chapter 2

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