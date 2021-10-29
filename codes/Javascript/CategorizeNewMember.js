const openOrSenior = (data) => {
  let results = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) results.push("Senior");
    else results.push("Open");
  }

  return results;
};

const openOrSenior2 = (data) => {
  return data.map((member) => {
    if (member[0] >= 55 && member[1] > 7) return "Senior";
    return "Open";
  });
};

const openOrSenior3 = (data) => {
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open"
  );
};

console.log(
  openOrSenior3([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
// ['Open', 'Senior', 'Open', 'Senior']
console.log(
  openOrSenior3([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ])
);
// ['Open', 'Open', 'Open', 'Open']
console.log(
  openOrSenior3([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ])
);
// ['Senior', 'Open', 'Open', 'Open']