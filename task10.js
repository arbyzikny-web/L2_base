function bingo(ticket, win) {
  let miniWins = 0;
  
  for (let subArray of ticket) {
    let str = subArray[0]; 
    let num = subArray[1]; 
    
    for (let i = 0; i < str.length; i++) {
      
      if (str.charCodeAt(i) === num) {
        miniWins++;
        break; 
      }
    }
  }
  return miniWins >= win ? 'Winner!' : 'Loser!';
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2)); 
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1)); 