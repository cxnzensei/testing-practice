const arrayAnalysis = require("../codes/arrayAnalysis");

test("arrayAnalysis test #1",() => {
    expect(arrayAnalysis([1,2,3,4,5,6,7])).toEqual({
        avg: 4,
        min: 1,
        max: 7,
        length: 7
    });
});

test("arrayAnalysis test #2",() => {
    expect(arrayAnalysis([81, 75, 67, 45, 100])).toEqual({
        avg: 368/5,
        min: 45,
        max: 100,
        length: 5
    });
});

test("arrayAnalysis test #3",() => {
    expect(arrayAnalysis([1, 0, 56, 678, 43])).toEqual({
        avg: 778/5,
        min: 0,
        max: 678,
        length: 5
    });
});

test("arrayAnalysis test #4",() => {
    expect(arrayAnalysis([99, 99, 99, 99, 99, 99, 99])).toEqual({
        avg: 99,
        min: 99,
        max: 99,
        length: 7
    });
});