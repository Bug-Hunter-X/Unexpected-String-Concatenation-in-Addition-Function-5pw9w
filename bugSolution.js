function foo(a, b) {
  // Check if both a and b are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Invalid input: both arguments must be numbers';
  }
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; 
}

console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: null
console.log(foo('10', 20)); // Output: Invalid input: both arguments must be numbers
console.log(foo(10, '20')); // Output: Invalid input: both arguments must be numbers