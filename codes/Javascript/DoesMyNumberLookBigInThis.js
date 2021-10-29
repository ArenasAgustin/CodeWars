function narcissistic(value) {
  const numbers = value.toString(),
    digits = numbers.length;
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]) ** digits;
  }

  return sum === value;
}
console.log(narcissistic(7)); //true
console.log(narcissistic(371)); //true

//BEST
function narcissistic(value) {
  return (
    value
      .toString()
      .split("")
      .map((x, i, arr) => x ** arr.length)
      .reduce((a, b) => +a + +b) === value
  );
}

//BEST2
function narcissistic(value) {
  return (
    ("" + value).split("").reduce(function (p, c) {
      return p + Math.pow(c, ("" + value).length);
    }, 0) == value
  );
}
