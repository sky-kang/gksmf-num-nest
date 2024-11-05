const { test, expect } = require("@jest/globals");
const { spawn } = require("child_process");

test("매개변수가 부족함", () => {
    const main = spawn("node", ["main.js", "avg"]);
    const outputs = [];
    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("매개변수가 부족합니다!");
    });
});

test("잘못된 명령어", () => {
    const main = spawn("node", ["main.js", "sum", "1", "2", "3"]);
    const outputs = [];
    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("잘못된 명령어입니다!");
    });
});

