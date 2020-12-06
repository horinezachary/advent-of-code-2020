part1();
//part2();

function part1() {
  let lines = readFile("./day6_input.txt");
  let answer = 0;
  let alphabet = [];
  for (line of lines) {
    if (line == "") {
      let count = 0;
      for(i in alphabet) {
        if (alphabet[i]) {
          count++;
        }
      }
      answer += count;
      alphabet = [];
    } else {
      line.split().sort();
      for (char of line) {
        alphabet[char.charCodeAt(0)-97] = char;
      }
    }
  }
  console.log(answer);
}

function readFile(filename) {
  const fs = require('fs');
  var data = fs.readFileSync(filename, 'utf8');
  var entries = data.split('\n');
  return entries;
}
