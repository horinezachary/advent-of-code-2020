const JMP = "jmp";
const ACC = "acc";
const NOP = "nop";

part1();
part2();

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

function part2() {
  let originalLines = readFile("./day8_input.txt");
  console.log(originalLines);
  for (i = 0; i < originalLines.length; i++) {
    let lines = readFile("./day8_input.txt");
    console.log(lines);
    let inst = getInst(lines,i);
    let sign = "-";
    if (inst.arg > 0) {
      sign = "+";
    }
    let changedLine = "";
    if (inst.op == JMP) {
      lines[i] = NOP + " " + sign + Math.abs(inst.arg);
    }
    if (inst.op == NOP) {
      lines[i] = JMP + " " + sign + Math.abs(inst.arg);
    }
    let result = runProgram(lines);
    console.log(result);
    if (result.ptr == originalLines.length-1) {
      return;
    }
  }
}

function runProgram(lines) {
  let acc = 0;
  let ptr = 0;
  let done = false;
  while(!done) {
    console.log(ptr);
    console.log(lines[ptr]);
    if (lines[ptr] == undefined || ptr == lines.length-1) {
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
  return {ptr,acc};
}

function getInst(lines, ptr) {
  line = lines[ptr];
  let op = line.match(/(acc|jmp|nop)/)[0];
  let sign = line.match(/[+-]/)[0];
  let arg = line.match(/-?[0-9]*$/)[0];
  arg = parseInt(arg);
  return {op,arg};
}

function readFile(filename) {
  const fs = require('fs');
  var data = fs.readFileSync(filename, 'utf8');
  var entries = data.split('\n');
  return entries;
}
