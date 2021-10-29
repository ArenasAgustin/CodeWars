const multiplication = (value) => {
  return value
    .toString()
    .split("")
    .reduce((prev, curr) => prev * curr);
};

function persistence(num) {
  let results = 0;

  while (num > 9) {
    num = multiplication(num);
    results++;
  }

  return results;
}

//OTRO
const persistence = (num) => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split("").reduce((a, b) => a * +b))
    : 0;
};
