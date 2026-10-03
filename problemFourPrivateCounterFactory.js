function createCounter() {
  // This variable is private because it lives inside createCounter
  let count = 0;

  return {
    // Increment count by 1
    increment() {
      count = count + 1;
    },

    // Decrement count by 1
    decrement() {
      count = count - 1;
    },

    // The 'get' keyword makes this accessible as counter.value instead of counter.value()
    get value() {
      return count;
    }
  };
}

const counter = createCounter()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.value)  // 1
console.log(counter.count)  // undefined — not directly accessible