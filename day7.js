part1();
part2();

function part1() {
  let lines = readFile("./day7_input.txt");
  let bags = [];
  for (line of lines) {
    let holder = line.substring(0,line.indexOf("s contain "));
    //console.log(line);
    let contents = line.match(/([0-9]+ [a-z ]*)(?:bag)/g);
    if (!contents) {
      contents = [];
    }
    for (i in contents) {
      contents[i] = contents[i].substring(contents[i].search(/[a-z]/));
    }
    //console.log(contents);
    bags.push({holder,contents})
  }
  let bagList = containsBag(bags,"shiny gold bag");
  console.log(bagList.length);
}

function part2() {
  let lines = readFile("./day7_input.txt");
  let bags = [];
  for (line of lines) {
    let holder = line.substring(0,line.indexOf("s contain "));
    //console.log(line);
    let contents = line.match(/([0-9]+ [a-z ]*)(?:bag)/g);
    if (!contents) {
      contents = [];
    }
    for (i in contents) {
      let number = contents[i].substring(0,contents[i].search(/[a-z]/)).trim();
      let name = contents[i].substring(contents[i].search(/[a-z]/));
      contents[i] = {name,number};
    }
    //console.log(contents);
    bags.push({holder,contents})
  }
  let containedBags = countBags(bags,"shiny gold bag") -1;
  console.log(containedBags);
}

function containsBag(bags, target) {
  //console.log("TARGET: " + target);
  let bagList = [];
  for (bag of bags) {
    let baggyboi = bag;
    if (contains(bag.contents,target)) {
      //console.log(baggyboi);
      //console.log(bag);
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

function countBags(bags,target) {
  //console.log("TARGET: " + target);
  let count = 0;
  for (bag of bags) {
    let baggyboi = bag;
    if (baggyboi.holder == target) {
      //console.log(baggyboi.contents);
      for (innerBag of baggyboi.contents) {
        count += (innerBag.number * countBags(bags,innerBag.name));
      }
    }
  }
  //console.log("Count: " + count);
  return count+1;
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
