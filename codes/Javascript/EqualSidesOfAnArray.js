function findEvenIndex(arr) {
  let left = 0,
    right = 0;

  for (let i = 0; i < arr.length; i++) {
    [...arr].slice(0, i).map((num) => (left += num));
    [...arr].slice(i + 1).map((num) => (right += num));

    if (left === right) return i;
    left = 0;
    right = 0;
  }

  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); //3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); //1
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); //-1
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); //3

//BEST
function findEvenIndex(arr) {
  var left = 0,
    right = arr.reduce(function (pv, cv) {
      return pv + cv;
    }, 0);
  for (var i = 0; i < arr.length; i++) {
    if (i > 0) left += arr[i - 1];
    right -= arr[i];

    if (left == right) return i;
  }

  return -1;
}

//BEST2
const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0);
const findEvenIndex = (a) =>
  a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));
