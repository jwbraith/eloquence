// RegExp Golf
console.log('Trying to find "car" and "cat"');
console.log(/ca(r|t)/.test('cat'));
console.log(/ca(r|t)/.test('car') + "\n");

console.log('Trying to find "pop" + "prop"');
console.log(/p(r)*op/.test('pop'));
console.log(/p(r)*op/.test('prop'));
console.log();

console.log('Trying to find "ferret" + "ferry" + "ferrari"');
console.log(/ferr(et|y|ari)/.test('ferret'));
console.log(/ferr(et|y|ari)/.test('ferry'));
console.log(/ferr(et|y|ari)/.test('ferrari'));
console.log();

console.log('Trying to find "-ious"');
console.log(/\b\w*?ious\b/.test('delicious'));
console.log(/\b\w*?ious\b/.test('Nonetheless this was harmonious'));
console.log();

console.log('Trying to find a whitespace char followed by . or , or : or ;');
console.log(/\s(.|,|:|;)/.test('Truly :'));
console.log(/\s(.|,|:|;)/.test('Truly .'));
console.log(/\s(.|,|:|;)/.test('Truly ,'));
console.log(/\s(.|,|:|;)/.test('Truly ;'));
console.log();

console.log('Word longer than six letters');
console.log(/\w{6,}/.test('excelsior'))
console.log(/\w{6,}/.test('foul'))
console.log();

