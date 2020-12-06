part1();
part2();

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

function part2() {
  let lines = readFile("./day6_input.txt");
  let answer = 0;
  let first = true;
  let alphabet = [];
  for (line of lines) {
    if (line == "") {
      let count = 0;
      for(i in alphabet) {
        if (alphabet[i]) {
          count++;
        }
      }
      console.log(alphabet + ":" + count);
      answer += count;
      alphabet = [];
      first = true;
    } else {
      let thisAlpha = [];
      line.split().sort();
      for (char of line) {
        thisAlpha[char.charCodeAt(0)-97] = char;
      }
      if (first == false) {
        for(i = 0; i < 26; i++) {
          if (alphabet[i] == String.fromCharCode(i+97) && thisAlpha[i] != String.fromCharCode(i+97)) {
            alphabet[i] = undefined;
          }
        }
      } else {
        alphabet = thisAlpha;
        first = false;
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
