function deepFreeze(obj) {
  // 1. Loop through all keys in the object
  for (let key in obj) {
    const value = obj[key];

    // Check if the value is an object and not null
    const isObject = typeof value === 'object' && value !== null;

    // If it is an object, recursively freeze it too
    if (isObject) {
      deepFreeze(value);
    }
  }

  // 2. Freeze the current object itself and return it
  return Object.freeze(obj);
}

const config = deepFreeze({ api: { baseUrl: 'https://x.com', retries: 3 }, debug: false })
config.api.baseUrl = 'https://changed.com' // should be ignored
config.debug = true                        // should be ignored
console.log(config.api.baseUrl, config.debug) // "https://x.com" false
console.log(Object.isFrozen(config.api))       // true