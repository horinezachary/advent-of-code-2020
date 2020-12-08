const JMP = "jmp";
const ACC = "acc";
const NOP = "nop";

part1();

function part1() {
  let lines = readFile("./day8_input.txt");
  let acc = 0;
  let ptr = 0;
  let done = false;
  while(!done) {
    console.log(ptr);
    console.log(lines[ptr]);
    if (lines[ptr] == undefined) {
      done = true;
    } else {
      let inst = getInst(lines,ptr);
      console.log(inst);
      lines[ptr] = undefined;
      if (inst.op == JMP) {
        ptr += inst.arg;
        if (ptr < 0) {
          ptr += lines.length-1;
        }
      } else if(inst.op == ACC) {
        acc += inst.arg;
        ptr++;
      } else if(inst.op == NOP) {
        //do nothing
        ptr++;
      }
    }
  }
  console.log(acc);
}

function getInst(lines, ptr) {
  line = lines[ptr];
  let op = line.match(/(acc|jmp|nop)/)[0];
  let sign = line.match(/[+-]/)[0];
  let arg = line.match(/-?[0-9]*$/)[0];
  arg = parseInt(arg);
  return {op,sign,arg};
}

function readFile(filename) {
  const fs = require('fs');
  var data = fs.readFileSync(filename, 'utf8');
  var entries = data.split('\n');
  return entries;
}
