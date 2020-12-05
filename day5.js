part1();
//testPasses();

function part1() {
  let lines = readFile("./day5_input.txt");
  let maxSeat = 0;
  for (line of lines) {
    let ret = consumeInput(line,0,127,0,7)
    console.log(ret.seatId);
    if (ret.seatId > maxSeat) {
      maxSeat = ret.seatId;
    }
  }
  console.log("MAX SEAT ID: " + maxSeat);
}

function testPasses() {
  let ret = consumeInput("FBFBBFFRLR",0,127,0,7);
  console.log(ret);
  ret = consumeInput("BFFFBBFRRR",0,127,0,7);
  console.log(ret);
  ret = consumeInput("FFFBBBFRRR",0,127,0,7);
  console.log(ret);
  ret = consumeInput("BBFFBBFRLL",0,127,0,7);
  console.log(ret);
}

function consumeInput(string, minRow, maxRow, minCol, maxCol) {
  let ret;
  if (string[0] == "F") {
    maxRow = maxRow - Math.floor((maxRow-minRow+1)/2);
    ret = consumeInput(string.substring(1), minRow, maxRow, minCol, maxCol);
  } else if (string[0] == "B") {
    minRow = minRow + Math.floor((maxRow-minRow+1)/2);
    ret = consumeInput(string.substring(1), minRow, maxRow, minCol, maxCol);
  } else if (string[0] == "L") {
    maxCol = maxCol - Math.floor((maxCol-minCol+1)/2);
    ret = consumeInput(string.substring(1), minRow, maxRow, minCol, maxCol);
  } else if (string[0] == "R") {
    minCol = minCol + Math.floor((maxCol-minCol+1)/2);
    ret = consumeInput(string.substring(1), minRow, maxRow, minCol, maxCol);
  }
  console.log(string + ":" + "{" + minRow + "," + maxRow + "," + minCol + "," + maxCol + "}");
  if (string == "") {
    let seatId = (minRow * 8) + minCol;
    return {"row" : minRow, "col": minCol, "seatId": seatId};
  } else {
    return ret;
  }
}

function readFile(filename) {
  const fs = require('fs');
  var data = fs.readFileSync(filename, 'utf8');
  var entries = data.split('\n');
  //console.log(entries);
  return entries;
}
