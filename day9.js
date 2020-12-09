let p1 = part1();
console.log(p1);
let p2 = part2(p1);
console.log(p2);
getValue(p2.i,p2.j);

console.log(parseInt(p2.iline) + parseInt(p2.jline));

function part1() {
  let lines = readFile("./day9_input.txt");
  for (i = 25; i < lines.length; i++) {
    valid = false;
    for (j = 1; j <= 25; j++) {
      for (k = 1; k <= 25; k++) {
        if (parseInt(lines[i-j])+parseInt(lines[i-k]) == parseInt(lines[i])) {
          valid = true;
        }
      }
    }
    if (valid == false) {
      return lines[i];
    }
  }
}

function part2(part1) {
  let lines = readFile("./day9_input.txt");
  for (i = 0; i < lines.length; i++) {
    let iline = lines[i];
    let counter = 0;
    for (j = i; j < lines.length; j++) {
      counter += parseInt(lines[j]);
      if (counter == part1) {
        console.log(iline +":"+lines[j]);
        return {i,j,"iline":lines[i],"jline":lines[j]};
      } else if (counter > part1) {
        counter = 0;
        break;
      }
    }
  }
}

function getValue(low,high) {
  let lines = readFile("./day9_input.txt");
  let min = 999999999999999;
  let max = 0;
  for (i = low; i <= high; i++) {
    if (parseInt(lines[i]) < min) {
      min = parseInt(lines[i]);
    }
    if (parseInt(lines[i]) > max) {
      max = parseInt(lines[i]);
    }
  }
  let result = min+max;
  console.log({min,max,result});
}

function readFile(filename) {
  const fs = require('fs');
  var data = fs.readFileSync(filename, 'utf8');
  var entries = data.split('\n');
  return entries;
}
