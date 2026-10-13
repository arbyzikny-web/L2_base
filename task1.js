function hasTwoCubeSums(n) {
  let count = 0;
  let limit = Math.floor(Math.cbrt(n));
  
  for (let a = 1; a <= limit; a++) {
    let b = Math.round(Math.cbrt(n - (a ** 3)));
    
    if (a < b && (a ** 3 + b ** 3 === n)) {
      count++;
      if (count === 2) return true;
    }
  }
  return false;
}

console.log(hasTwoCubeSums(1729));
console.log(hasTwoCubeSums(42));