/* 
Problem: Descending Order

Description: Write a function that takes a positive integer and returns it's
digits in descending order, returning the largest possible integer from the given digits 
*/

function descendingOrder(n) {
// convert number to string, split each digit, sort ascending, reverse array, join digits
  let sorted = n.toString().split('').sort().reverse().join('');
// coerce string to number using +
  return +sorted;
}