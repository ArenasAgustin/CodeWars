function songDecoder(song){
  let aux = song.split("WUB"), str = '';

  for(let i = 0; i < aux.length; i++)
    if(aux[i] !== '') str = str.concat(' ', aux[i]);
  
  return str.trim();
}

console.log(songDecoder('AWUBBWUBC')) //A B C
console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBC')) //A B C
console.log(songDecoder('WUBAWUBBWUBCWUB')) //A B C

//BEST
function songDecoder(song){
  return song.split('WUB').filter(x => x !== '').join(' ');
}