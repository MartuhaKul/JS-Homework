let arrayOfPrimitives = (arr) => {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
};

let arrlist = [1, "Hello", true, 42, "World", false];
arrayOfPrimitives(arrlist);