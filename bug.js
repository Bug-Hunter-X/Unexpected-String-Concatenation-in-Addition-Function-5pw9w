function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // Potential error if a or b are not numbers
}

console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: null
console.log(foo('10', 20)); // Output: 1020 (Unexpected)
console.log(foo(10, '20')); // Output: 1020 (Unexpected)