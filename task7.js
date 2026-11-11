function wave(str) {
  let result = [];
  
  for (let i = 0; i < str.length; i++) {
    
    if (str[i] === ' ') {
      continue;
    }
    
    
    let waveString = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    result.push(waveString);
  }
  
  return result;
}
console.log(wave("hello")); 
console.log(wave(" spaces "));