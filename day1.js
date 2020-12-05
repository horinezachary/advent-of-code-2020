part1();
part2();

function part1() {
    let numbers = readFile('./day1_input.txt');
    let answer = doubleLoop(numbers,2020);
    console.log(answer);
}

function part2() {
  let numbers = readFile('./day1_input.txt');
  let answer = tripleLoop(numbers,2020);
  console.log(answer);
}

function doubleLoop(numbers,target) {
  for (i of numbers) {
    for (j of numbers) {
      if ((parseInt(i) + parseInt(j)) == target) {
        return i*j;
      }
    }
  }
}

function tripleLoop(numbers,target) {
  for (i of numbers) {
    for (j of numbers) {
      for (k of numbers) {
        if ((parseInt(i) + parseInt(j) + parseInt(k)) == target) {
          return i*j*k;
        }
      }
    }
  }
}


function readFile(filename) {
  const fs = require('fs');
  var data = fs.readFileSync(filename, 'utf8');
  var entries = data.split('\n');
  //console.log(entries);
  return entries;
}
