/* 
Problem: Descending Order

Description: Write a function that takes a positive integer and returns it's
digits in descending order, returning the largest possible integer from the given digits 
*/

function descendingOrder(n) {
// convert number to string, split each digit, sort ascending, reverse array, join digits
  let processed = n.toString();
  let arr = string.split('');
  let sorted = arr.sort();
  let descend = sort.reverse();
  let joined = descend.join('');
// coerce string to number using +
  return +joined;
}