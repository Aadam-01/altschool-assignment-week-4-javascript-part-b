function deepEqual(a, b) {
  // 1. Are they already identical? (Numbers, strings, booleans, or the exact same object)
  if (a === b) {
    return true;
  }

  // 2. JavaScript has a famous quirk: typeof null is 'object'.
  // We must handle null explicitly so our code doesn't crash later.
  if (a === null || b === null) {
    return false;
  }

  // 3. If either one is NOT an object (e.g., one is a number, the other a string),
  // and they didn't pass Step 1, they cannot be equal.
  if (typeof a !== 'object' || typeof b !== 'object') {
    return false;
  }

  // 4. Get the list of property names for both objects.
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // If they have a different number of keys, they are not equal.
  // Example: { a: 1 } vs { a: 1, b: 2 }
  if (keysA.length !== keysB.length) {
    return false;
  }

  // 5. Loop through every key in object A and compare it with object B.
  for (let key of keysA) {
    // Does object B even have this key?
    // Example: { a: 1 } vs { b: 1 }
    if (b.hasOwnProperty(key) === false) {
      return false;
    }

    // Call deepEqual on the values.
    // If the values are numbers/strings, Step 1 checks them.
    // If the values are nested objects, it dives inside them.
    const valuesAreEqual = deepEqual(a[key], b[key]);
    if (valuesAreEqual === false) {
      return false;
    }
  }

  // 6. If none of the checks failed, they must be equal!
  return true;
}

// Tests
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 }));                      // false