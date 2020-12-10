let p1 = part1();
console.log(p1);
console.log("Part 1: " + (p1.one*p1.three));

function part1() {
  let lines = readFile("./day10_input.txt");
  lines = lines.sort((a,b) => {return parseInt(a) - parseInt(b)});
  let one = 0;
  let two = 0;
  let three = 0;
  for (i = 0; i < lines.length; i++) {
    let diff;
    if (i == 0) {
      diff = parseInt(lines[i]);
    } else {
      diff = parseInt(lines[i]) - parseInt(lines[i-1]);
    }
    if (diff == 1) {
      one++;
    }
    if (diff == 2) {
      two++;
    }
    if (diff == 3) {
      three++;
    }
  }
  three++;
  return {one,two,three}
}

function readFile(filename) {
  const fs = require('fs');
  var data = fs.readFileSync(filename, 'utf8');
  var entries = data.split('\n');
  return entries;
}
