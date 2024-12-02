function addToLocalStorage(arrayName, objToAdd) {
    let arrParse = JSON.parse(localStorage.getItem(arrayName));
    arrParse.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(arrParse));
}
addToLocalStorage('sessionsList', {})