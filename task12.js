function longest(arr, n) {
  const sorted = arr.slice().sort((a, b) => b.length - a.length);
  return sorted[n - 1];
}
const arr = ["Hello", "World", "Codewars", "Katas"];
console.log(longest(arr, 3)); 