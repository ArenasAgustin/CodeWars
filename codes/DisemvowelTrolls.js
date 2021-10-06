function disemvowel(str) {
  var lista = [];
  
  for(let i=0; i<str.length; i++){
    if((str[i] === "a") || (str[i] === "e") || (str[i] === "i") || (str[i] === "o") || (str[i] === "u")){
      continue;
    }
    else if((str[i] === "A") || (str[i] === "E") || (str[i] === "I") || (str[i] === "O") || (str[i] === "U")){
      continue;
    }
    else{
      lista.push(str[i]);
    }
  }
  return lista.join("");
}

// console.log(disemvowel('This website is for losers LOL!'));
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read'"));
// console.log(disemvowel('What are you, a communist?'));

function disemvowel2(str){
  const vowels = { 'a': true, 'e': true, 'i': true, 'o': true, 'u': true };
  let results = '';

  for(let i = 0; i < str.length; i++){
    if(!vowels[str[i].toLowerCase()]) results = `${results}${str[i]}`
  }

  return results;
}

console.log(disemvowel2('This website is for losers LOL!'));
console.log(disemvowel2("No offense but,\nYour writing is among the worst I've ever read'"));
console.log(disemvowel2('What are you, a communist?'));

//BEST
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}