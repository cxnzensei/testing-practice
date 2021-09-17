const arrayAnalysis = (arr) => {
    return {
        avg: arr.reduce((a, b) => a + b, 0)/arr.length,
        length: arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
};

module.exports = arrayAnalysis;