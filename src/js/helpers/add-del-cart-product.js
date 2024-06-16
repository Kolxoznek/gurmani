import axios from "axios";

import activateBuyBtn from "./activate-buy-btn";
import renderCount from "./render-count";
import changePriceCartCard from "./change-price-cart-card";

async function addCartProduct(attr, count = 1, ...args) {
    await axios.get('http://localhost:3000/products')
    .then(data => {
            let objLocal = JSON.parse(localStorage.getItem('cart')) || {};

            const product = data.data.find(item => item.id === attr)
            product.count = count

            console.log(args)

            objLocal[product.id] = product
            objLocal[product.id][args[0]] = args[1]
            localStorage.setItem('cart', JSON.stringify(objLocal))
        })

    activateBuyBtn(attr)

    renderCount(attr)

    changePriceCartCard(attr, count)
}

function deleteCartProduct(attr) {
    const objLocal = JSON.parse(localStorage.getItem('cart'))
    delete objLocal[attr]
    localStorage.setItem('cart', JSON.stringify(objLocal))

    activateBuyBtn(attr)
}

export {addCartProduct, deleteCartProduct}