function isValidWalk(walk) {
  const directions = {
    n: 1,
    s: -1,
    w: -1,
    e: 1,
  };

  let x = 0,
    y = 0;

  if (walk.length !== 10) return false;

  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n" || walk[i] === "s") x += directions[walk[i]];
    else if (walk[i] === "w" || walk[i] === "e") y += directions[walk[i]];
  }

  return x === 0 && y === 0;
}

// BEST
// function isValidWalk(walk) {
//   var dx = 0
//   var dy = 0
//   var dt = walk.length

//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case 'n': dy--; break
//       case 's': dy++; break
//       case 'w': dx--; break
//       case 'e': dx++; break
//     }
//   }

//   return dt === 10 && dx === 0 && dy === 0
// }

console.log(isValidWalk(["w"])); // false
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
); // false
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // false
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); // true
