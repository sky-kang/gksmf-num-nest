#!/usr/bin/env node
const lib = require("./lib");

if (process.argv.length <= 3) {
    console.log("매개변수가 부족합니다.");
    process.exit(1);
}

let command = process.argv[2];
let numbers = process.argv.slice(3).map(Number);

if (numbers.some(isNaN)) {
    console.log("모든 매개변수는 숫자여야 합니다.");
    process.exit(1);
}

let result;

switch (command) {
    case "avg":
        result = lib.avg(numbers);
        break;
    case "prime":
        result = lib.prime(numbers[0]);
        break;
    case "factorial":
        result = lib.factorial(numbers[0]);
        break;
    default:
        console.log("잘못된 명령어입니다.");
        process.exit(1);
}

console.log(result);
