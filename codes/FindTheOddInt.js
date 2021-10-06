function findOdd(numberArr) {
  let aux1 = 0;

  for(let i = 1; i < numberArr.length; i = i + 1){
    for(let j = 0; j < numberArr.length; j = j + 1){
      if(numberArr[i] === numberArr[j]) aux1++;
    }
    if(aux1 % 2 !== 0) return numberArr[i]
  }

  return numberArr[0]
}

console.log(findOdd([ 10 ]));

//BEST
//const findOdd = (xs) => xs.reduce((a, b) => a ^ b);