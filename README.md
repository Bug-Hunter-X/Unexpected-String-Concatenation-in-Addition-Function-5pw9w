# Unexpected String Concatenation in JavaScript
This code demonstrates a common but easily overlooked error in JavaScript: the unexpected concatenation of strings when performing addition with non-number operands.  JavaScript's loose typing can lead to unexpected behavior if you're not careful about type checking.

The `foo` function is intended to add two numbers.  However, it fails if either `a` or `b` is a string, resulting in string concatenation instead of numerical addition.  The solution shows how to properly handle this using type checking and conversion.