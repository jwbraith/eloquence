// Deep Comparison
let deepEqual = (comparer, comparand) => {
  if (comparer === comparand) {
    return true;
  }
  if (comparer == null || typeof comparer != "object" || comparand == null || typeof comparand != "object") {
    return false;
  }
  let keysA = Object.keys(comparer), keysB = Object.keys(comparand);
  if (keysA.length != keysB.length) {
    return false;
  }
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(comparer[key], comparand[key])) {
      return false;
    }
  }
  return true;
}
let scar = { face: "slash" };
let chin = { face: "butt" };
console.log(deepEqual(scar, chin));