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

const eq1 = (x, y, d) => {
  return x + y == d;
};

for (d = 0; d < k; d++) {
  for (z = 0; z < k; z++) {
    if ( (n - Math.pow(z, 3) % d !== 0) & (n - Math.pow(-z, 3) % d !== 0)){
      continue;
    }
    
    // console.log('d divides n-z^3')

  }
}
