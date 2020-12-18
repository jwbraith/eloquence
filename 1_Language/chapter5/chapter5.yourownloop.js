// Your Own Loop
let loop = (start, tester, update, body) => {
  for (let value = start; tester(value); value = update(value)) {
    body(value);
  }
}
loop(24, n => (n > 0), n => n - 1, console.log);