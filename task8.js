function expandedForm(num) {
  const [intPart, decPart] = num.toString().split('.');
  
  let result = [];

  if (intPart) {
    for (let i = 0; i < intPart.length; i++) {
      if (intPart[i] !== '0') {
        result.push(intPart[i] + '0'.repeat(intPart.length - 1 - i));
      }
    }
  }

  if (decPart) {
    for (let i = 0; i < decPart.length; i++) {
      if (decPart[i] !== '0') {
        result.push(`${decPart[i]}/${Math.pow(10, i + 1)}`);
      }
    }
  }

  return result.join(' + ');
}

console.log(expandedForm(70304));    
console.log(expandedForm(807.304));  
console.log(expandedForm(1.24));    