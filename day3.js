part1();
part2();

function part1() {
  let lines = readFile("./day3_input.txt");
  let trees = treeCount(lines,3,1);
  console.log("Trees: " + trees);
}

function part2() {
  let lines = readFile("./day3_input.txt");
  let trees = treeCount(lines,1,1);
  trees *= treeCount(lines,3,1);
  trees *= treeCount(lines,5,1);
  trees *= treeCount(lines,7,1);
  trees *= treeCount(lines,1,2);
  console.log("Trees: " + trees);
}

function treeCount(lines,xSlope,ySlope) {
  let treecount = 0;
  let xpos = 0;
  for (let y = 0; y < lines.length; y += ySlope) {
    if (y > lines.length) {
      //ran off the end of the array
    } else {
      let line = lines[y];
      if (line[xpos] == "#") {
        treecount++;
      }
      xpos = (xpos + xSlope)%(line.length);
    }
  }
  return treecount;
}


function readFile(filename) {
  const fs = require('fs');
  var data = fs.readFileSync(filename, 'utf8');
  var entries = data.split('\n');
  //console.log(entries);
  return entries;
}
