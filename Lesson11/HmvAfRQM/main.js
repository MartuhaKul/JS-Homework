// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.
let div = document.getElementById('wrap');

fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObj => {
        let {carts} = cartsObj;
        console.log(carts);
        for (const cart of carts) {
            let divCart = document.createElement('div');
            divCart.classList.add('cart-container')

            let cartInfo = document.createElement('div');
            cartInfo.innerText = `
                 "total": ${cart.total},
                 "discountedTotal": ${cart.discountedTotal},
                 "userId": ${cart.userId},
                 "totalProducts": ${cart.totalProducts},
                 "totalQuantity": ${cart.totalQuantity}
            `
            let olProducts = document.createElement('ol');
            for (const product of cart.products) {
                let li = document.createElement('li');
                li.innerText = `
                   "id": ${product.id},
                   "title": ${product.title},
                   "price": ${product.price},
                   "quantity": ${product.quantity},
                   "total": ${product.total},
                   "discountPercentage": ${product.discountPercentage},
                   "discountedTotal": ${product.discountedTotal}
                `
                let img = document.createElement('img');
                img.src = product.thumbnail;
                li.appendChild(img);

                olProducts.appendChild(li);

            }

            divCart.append(cartInfo, olProducts);
            div.appendChild(divCart);

        }

    });