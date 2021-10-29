export const otherAngle = (a: number, b: number): number => {
    return 180 - a - b;
}

console.log(otherAngle(30, 60)); // 90
console.log(otherAngle(60, 60)); // 60
console.log(otherAngle(43, 78)); // 59
console.log(otherAngle(10, 20)); // 150

// OTHER SOLUTIONS
export const otherAngle2 = (a, b) => {
    if(a < 0 || b <0)
      return 0;
    return 180 - (a +b);
  }
  