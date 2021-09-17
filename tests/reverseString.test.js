const reverseString = require("../codes/reverseString");

test("reverse String test #1", () => {
    expect(reverseString("Star Wars")).toBe("sraW ratS");
});

test("reverse String test #2", () => {
    expect(reverseString("tHEpInkP@nther")).toBe("rehtn@PknIpEHt");
});

test("reverse String test #3", () => {
    expect(reverseString("that's What SHE said")).toBe("dias EHS tahW s'taht");
});

test("reverse String test #4", () => {
    expect(reverseString("WubbaLubbaDubDub")).toBe("buDbuDabbuLabbuW");
});

