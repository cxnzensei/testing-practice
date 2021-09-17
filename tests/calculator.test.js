const calculator = require("../codes/calculator");

test("Calculator test #1", () => {
    expect(calculator.add(21,9)).toBe(30);
});

test("Calculator test #2", () => {
    expect(calculator.sub(45,50)).toBe(-5);
});

test("Calculator test #3", () => {
    expect(calculator.mul(5,3)).toBe(15);
});

test("Calculator test #4", () => {
    expect(calculator.div(1000, 10)).toBe(100);
});