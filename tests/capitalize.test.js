const capitalize = require("../codes/capitalize");

test("Capitalize test #1", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("Capitalize test #2", () => {
    expect(capitalize("helloWorld")).toBe("HelloWorld");
});

test("Capitalize test #3", () => {
    expect(capitalize("anakin Skywalker is Darth Vader")).toBe("Anakin Skywalker is Darth Vader");
});

test("Capitalize test #4", () => {
    expect(capitalize("yELLO MaTe")).toBe("YELLO MaTe");
});