function solution(number){
  const romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  let roman = '';
  
  for(i in romanNumbers){
    while(number >= romanNumbers[i]){
      roman += i;
      number -= romanNumbers[i];
    }
  }
  
  return roman;
}

//OTRO
function solution2(number){
  return [
    { threshold: 1000, char: 'M'},
    { threshold: 900,  char: 'CM'},
    { threshold: 500,  char: 'D'},
    { threshold: 400,  char: 'CD'},
    { threshold: 100,  char: 'C'},
    { threshold: 90,   char: 'XC'},
    { threshold: 50,   char: 'L'},
    { threshold: 40,   char: 'XL'},
    { threshold: 10,   char: 'X'},
    { threshold: 9,    char: 'IX'},
    { threshold: 5,    char: 'V'},
    { threshold: 4,    char: 'IV'},
    { threshold: 1,    char: 'I'}
  ].reduce(function(prev, curr, idx, arr)
  {
    while(number >= curr.threshold)
    {
      prev += curr.char;
      number -= curr.threshold;
    }
    
    return prev;
  }, '');
}

console.log(solution(1)) //'I'
console.log(solution(22)) //'XXII'
console.log(solution(2008)) //'MMVIII'
console.log(solution(1990)) //'MCMXC'