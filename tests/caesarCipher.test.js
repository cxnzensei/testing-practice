const caesarCipher = require("../codes/caesarCipher");

test("Caesar Cipher test #1", () => {
    expect(caesarCipher("that's what she said", 7)).toBe("aoha'z doha zol zhpk");
});

test("Caesar Cipher test #2", () => {
    expect(caesarCipher("i declare bankruptcy", 4)).toBe("m higpevi ferovytxgc");
});

test("Caesar Cipher test #3", () => {
    expect(caesarCipher("bears, beats, battlestar galactica", 11)).toBe("mplcd, mpled, mleewpdelc rlwlnetnl");
});

test("Caesar Cipher test #4", () => {
    expect(caesarCipher("pewpewpambamkrahamahaha!", 5)).toBe("ujbujbufrgfrpwfmfrfmfmf!");
});

