import axios from "axios";
import calculateTotalPrice from "./total-price";
import activateBuyBtn from "./activate-buy-btn";
import renderCount from "./render-count";
import changePriceCartCard from "./change-price-cart-card";

async function addCartProduct(attr, count = 1) {
    await axios.get('http://localhost:3000/products')
    .then(data => {
            let objLocal = JSON.parse(localStorage.getItem('cart')) || {};

            const product = data.data.find(item => item.id === attr)
            product.count = count

            objLocal[product.id] = product
            localStorage.setItem('cart', JSON.stringify(objLocal))
        })
    //calculateTotalPrice()
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