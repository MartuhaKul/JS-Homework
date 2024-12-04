// - взяти https://dummyjson.com/recipes та вивести інформацію
// про всі рецепти. Інгредієнти повинні бути список під час відображення.
let wrap = document.getElementById('wrap');

fetch('https://dummyjson.com/recipes')
    .then((response) => response.json())
    .then((recipesObj) => {
        let {recipes} = recipesObj;
        console.log(recipes);
        for (const recipe of recipes) {
            let recipeDiv = document.createElement('div');
            for (const recipeKey in recipe) {
                if (Array.isArray(recipe[recipeKey])) {
                    let arrayDiv = document.createElement('div');
                    let h4 = document.createElement('h4');
                    h4.innerText = recipeKey;
                    let ol = document.createElement('ol');
                    let array = recipe[recipeKey];
                    for (const item of array) {
                        let li = document.createElement('li');
                        li.innerText = item;
                        ol.appendChild(li);
                    }
                    arrayDiv.append(h4, ol);
                    recipeDiv.appendChild(arrayDiv);
                } else {
                    let keyDiv = document.createElement('div');
                    keyDiv.innerText = `
                     ${recipeKey}: ${recipe[recipeKey]}`
                    recipeDiv.appendChild(keyDiv);
                }
            }
            let img = document.createElement('img');
            img.src = recipe.image;
            recipeDiv.appendChild(img);
            wrap.appendChild(recipeDiv);
        }


    });