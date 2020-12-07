part1();

function part1() {
  let lines = readFile("./day7_input.txt");
  let bags = [];
  for (line of lines) {
    let holder = line.substring(0,line.indexOf("s contain "));
    console.log(line);
    let contents = line.match(/([0-9]+ [a-z ]*)(?:bag)/g);
    if (!contents) {
      contents = [];
    }
    for (i in contents) {
      contents[i] = contents[i].substring(contents[i].search(/[a-z]/));
    }
    console.log(contents);
    bags.push({holder,contents})
  }
  let bagList = containsBag(bags,"shiny gold bag");
  console.log(bagList.length);
}

function containsBag(bags, target) {
  console.log("TARGET: " + target);
  let bagList = [];
  for (bag of bags) {
    let baggyboi = bag;
    if (contains(bag.contents,target)) {
      console.log(baggyboi);
      console.log(bag);
      if (!contains(bagList,baggyboi.holder)) {
        bagList.push(baggyboi.holder);
        let innerBaglist = containsBag(bags,baggyboi.holder);
        for (innerBag of innerBaglist) {
          if (!contains(bagList,innerBag)) {
            bagList.push(innerBag);
          }
        }
      }
    }
  }
  return bagList;
}

function contains(contents,target) {
  for (bag of contents) {
    if (bag == target) {
      return true;
    }
  }
  return false;
}

function readFile(filename) {
  const fs = require('fs');
  var data = fs.readFileSync(filename, 'utf8');
  var entries = data.split('\n');
  return entries;
}
