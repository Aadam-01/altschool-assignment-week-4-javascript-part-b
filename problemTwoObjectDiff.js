function diffObjects(oldObj, newObj) {
  // Create an object to store our final results
  const result = {
    added: {},
    removed: {},
    changed: {}
  };

  // 1. Check for removed keys and changed values by looping through oldObj
  for (let key in oldObj) {
    // If the key is in oldObj, but NOT in newObj -> it was removed
    if (!(key in newObj)) {
      result.removed[key] = oldObj[key];
    } 
    // If it exists in both, but the values are different -> it changed
    else if (oldObj[key] !== newObj[key]) {
      result.changed[key] = {
        from: oldObj[key],
        to: newObj[key]
      };
    }
  }

  // 2. Check for newly added keys by looping through newObj
  for (let key in newObj) {
    // If the key is in newObj, but was NOT in oldObj -> it was added
    if (!(key in oldObj)) {
      result.added[key] = newObj[key];
    }
  }

  return result;
}

console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
))