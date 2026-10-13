var findMissing = function (list) {
  
  const step = (list[list.length - 1] - list[0]) / list.length;
  
  
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i + 1] - list[i] !== step) {
      return list[i] + step; 
    }
  }
}


console.log(findMissing([1, 3, 5, 9, 11])); 