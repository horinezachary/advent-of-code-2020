part1();

function part1() {
  let lines = readFile("./day3_input.txt");
  let treecount = 0;
  let xpos = 0;
  for (line of lines) {
    if (line[xpos] == "#") {
      treecount++;
    }
    xpos = (xpos + 3)%(line.length);
  }
  console.log("Trees: " + treecount);
}

function readFile(filename) {
  const fs = require('fs');
  var data = fs.readFileSync(filename, 'utf8');
  var entries = data.split('\n');
  //console.log(entries);
  return entries;
}
