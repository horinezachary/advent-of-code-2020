
part1();
part2();

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

function part2() {
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
      let keys = line.match(/(?:[\s]|^)?(byr:(19[2-9][0-9]|200[0-2])|iyr:20(1[0-9]|20)|eyr:20(2[0-9]|30)|hgt:(1[5-8][0-9]cm|19[0-3]cm|[5-6][0-9]in|7[0-6]in)|hcl:#[0-9a-f]{6}|ecl:(amb|blu|brn|gry|grn|hzl|oth)|pid:[0-9]{9}(?:[\s]|$))/g);
      console.log(keys);
      if (keys) {
        for (key of keys) {
          let header = key.trim().split(":")[0];
          currentPassport.push(header);
        }
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
