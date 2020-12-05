part1();

function part1() {
  var lines = readFile('day2_input.txt');
  let counter = 0;
  let linenum = 0;
  for (line of lines) {
    linenum++;
    if (linenum != 1001) {
      let parts = line.split(':');
      let policy = parts[0];
      let password = parts[1].trim();
      if (loopMatch(policy,password)) {
        counter++;
      }
    }
  }
  console.log("Matches: " + counter);
}

function regexMatch(policy, password) {
  let regexstr = "^([^"+ policy.split(" ")[1] +"]*[" + policy.split(" ")[1] + "]){" + policy.split(" ")[0].replace("-",",") + "}$";
  let regex = new RegExp(regexstr,"g");
  if (password.match(regex)) {
    return true;
  } else {
    return false;
  }
}

function loopMatch(policy, password) {
  let match = policy.split(" ")[1];
  let min = policy.split(" ")[0].split("-")[0];
  let max = policy.split(" ")[0].split("-")[1];
  let count = 0;
  for (char of password) {
    if (char == match) {
      count++;
    }
  }
  if (count >= min && count <= max) {
    return true;
  } else {
    return false;
  }
}

function readFile(filename) {
  const fs = require('fs');
  var data = fs.readFileSync(filename, 'utf8');
  var entries = data.split('\n');
  //console.log(entries);
  return entries;
}
