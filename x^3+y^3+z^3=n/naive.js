let n = 27;
let k = 100;

console.log(`n=${n}, k=${k}`);

let solution;

const eq0 = (x, y, z, n) => {
  let c1 = Math.pow(x, 3) + Math.pow(y, 3) + Math.pow(-z, 3) === n;
  let c2 = Math.pow(x, 3) + Math.pow(-y, 3) + Math.pow(-z, 3) === n;
  let c3 = Math.pow(x, 3) + Math.pow(-y, 3) + Math.pow(z, 3) === n;

  let c4 = Math.pow(-x, 3) + Math.pow(y, 3) + Math.pow(-z, 3) === n;
  let c5 = Math.pow(-x, 3) + Math.pow(y, 3) + Math.pow(z, 3) === n;
  let c6 = Math.pow(-x, 3) + Math.pow(-y, 3) + Math.pow(z, 3) === n;

  if (c1) {
    solution = [x, y, -z];
    return true;
  }
  if (c2) {
    solution = [x, -y, -z];
    return true;
  }
  if (c3) {
    solution = [x, -y, z];
    return true;
  }

  if (c4) {
    solution = [-x, y, -z];
    return true;
  }

  if (c5) {
    solution = [-x, y, z];
    return true;
  }
  if (c6) {
    solution = [-x, -y, z];
    return true;
  }

  return false;
};

for (x = 0; x < k; x++) {
  for (y = 0; y < k; y++) {
    for (z = 0; z < k; z++) {
      if (x === y || y === z || x === z) {
        continue;
      }
      if (eq0(x, y, z, n)) {
        let [xn, yn, zn] = solution;
        console.log(
          `${Math.pow(xn, 3)} + ${Math.pow(yn, 3)} + ${Math.pow(zn, 3)} = ${n}`
        );
      }
    }
  }
}
