function validateSchema(obj, schema) {
  const errors = [];

  // Loop over every expected key in the schema
  for (let key in schema) {
    const expectedType = schema[key];

    // 1. Check if the property is missing completely
    if (!Object.hasOwn(obj, key)) {
      errors.push(`${key}: missing property`);
    } 
    // 2. Check if the type doesn't match the schema
    else if (typeof obj[key] !== expectedType) {
      const actualType = typeof obj[key];
      errors.push(`${key}: expected ${expectedType}, got ${actualType}`);
    }
  }

  return errors;
}

const schema = { name: 'string', age: 'number', isAdmin: 'boolean' }
console.log(validateSchema({ name: 'Ada', age: 21, isAdmin: false }, schema))
// []
console.log(validateSchema({ name: 'Ada', age: '21' }, schema))
// ['age: expected number, got string', 'isAdmin: missing property']