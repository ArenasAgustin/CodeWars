function isPangram(string){
  const abc =[ 
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ñ'
  ];

  let memo = {}, counter = 0;
  
  for(let i = 0; i < abc.length; i++){
    for(let j = 0; j < string.length; j++){
      if(abc[i] === string[j].toLowerCase()
         && !memo[string[j].toLowerCase()]){
        counter++;
        memo[string[j].toLowerCase()] = true;
      } 
    }
  }
  
  return counter >= 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.')); //true
console.log(isPangram('This is not a pangram.')); //false

function isPangramObj(string){
  const abc = {
      'a': true, 'b': true, 'c': true, 'd': true, 'e': true, 'f': true, 'g': true,
      'h': true, 'i': true, 'j': true, 'k': true, 'l': true, 'm': true, 'n': true,
      'o': true, 'p': true, 'q': true, 'r': true, 's': true, 't': true, 'u': true,
      'v': true, 'w': true, 'x': true, 'y': true, 'z': true, 'ñ': true
  };

  let memo = {}, counter = 0;
  
  for(let j = 0; j < string.length; j++){
    if(abc[string[j].toLowerCase()] && !memo[string[j].toLowerCase()]){
      counter++;
      memo[string[j].toLowerCase()] = true;
    }
  }
  
  return counter >= 26;
}

console.log(isPangramObj('The quick brown fox jumps over the lazy dog.')); //true
console.log(isPangramObj('This is not a pangram.')); //false

// BEST
function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}