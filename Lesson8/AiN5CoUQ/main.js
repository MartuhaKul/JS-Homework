function cloner(obj) {
    if (obj) {
        let functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                let cloneFunc = obj[key].bind({});
                functions.push({cloneFunc, key})

            }

        }
        let cloneObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
             cloneObj[func.key] = func.cloneFunc;
        }
        return cloneObj
    }
    throw new Error('!!!')
}
let clone = cloner({id: 1, name: 'asd', greeting() {console.log('hello')}, foo() {console.log('bar')}});
console.log(clone)
