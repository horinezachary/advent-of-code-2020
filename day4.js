
part1();


function part1() {
  let lines = readFile("./day4_input.txt");
  let validPassports = 0;
  let currentPassport = [];
  for (line of lines) {
    if (line == "") {
      if (checkValid(currentPassport)) {
        validPassports++;
      }
      currentPassport = [];
    } else {
      let keys = line.match(/(?:\s?)(byr|iyr|eyr|hgt|hcl|ecl|pid|cid):[0-9a-zA-Z#]*(?:\s?)/g);
      for (key of keys) {
        let header = key.trim().split(":")[0];
        currentPassport.push(header);
      }
    }
  }
  console.log(validPassports);
}

function checkValid(currentPassport) {
  let withCid = ["byr","cid","ecl","eyr","hcl","hgt","iyr","pid"];
  let withoutCid = ["byr","ecl","eyr","hcl","hgt","iyr","pid"];
  if (arrayEqual(currentPassport.sort(),withCid) || arrayEqual(currentPassport.sort(),withoutCid)) {
    return true;
  } else {
    return false;
  }
}

function arrayEqual(array1,array2) {
  if (array1.length != array2.length) {
    return false;
  }
  for (i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
      return false;
    }
  }
  return true;
}

function readFile(filename) {
  const fs = require('fs');
  var data = fs.readFileSync(filename, 'utf8');
  var entries = data.split('\n');
  //console.log(entries);
  return entries;
}
