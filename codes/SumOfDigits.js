const sum = (value) => {
  return value.toString().split('').reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);
}

function digital_root(num) {
  while(num > 9){
    num = sum(num);
  }
  
  return num
}

console.log(digital_root(16)) //7 
console.log(digital_root(456)) //6

//BEST
function digital_root2(n) {
  return (n - 1) % 9 + 1;
}