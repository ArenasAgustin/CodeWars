function deleteNth(arr,n){
  let memo = {}, resultArray = [];
  [...new Set(arr)].forEach(e => memo[e] = 0)
  
  for(let i = 0; i < arr.length; i++){
    memo[arr[i]] = 1 + memo[arr[i]]
    if(memo[arr[i]] <= n) resultArray.push(arr[i])
  }
  
  return resultArray
}

console.log(deleteNth([20,37,20,21], 1)) //[20,37,21]
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)) //[1, 1, 3, 3, 7, 2, 2, 2]

//BEST
function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}