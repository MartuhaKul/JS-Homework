let sum = (arr) => {
    let totalSum = 0;
    for (const item of arr) {
        totalSum += item;
    }
    return totalSum;
};

console.log(sum([1, 2, 10]));
