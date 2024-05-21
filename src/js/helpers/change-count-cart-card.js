import { addCartProduct, deleteCartProduct } from "./add-del-cart-product"
import changePriceCartCard from "./change-price-cart-card"
import { renderCartCards } from "../blocks/render-cart-cards"
import { hideCardCounter } from "./show-hide-card-counter"


function changeCountCartCard(attr, n = 1) {
    const obj = JSON.parse(localStorage?.getItem('cart'))[attr]

    let count = obj?.count

    if (count) {
        let changedCount = +count + n
    
        console.log(changedCount)
        if (changedCount === 0) {
            deleteCartProduct(attr)
            renderCartCards()
            hideCardCounter(attr)
    
        } else if (changedCount > 10) {
            addCartProduct(attr, 10)
        } else {
            addCartProduct(attr, changedCount)
            changePriceCartCard(attr, changedCount)
        }
    } else {
        addCartProduct(attr, 1)
    }
}

export default changeCountCartCard