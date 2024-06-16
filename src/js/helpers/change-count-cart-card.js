import { addCartProduct, deleteCartProduct } from "./add-del-cart-product"
import changePriceCartCard from "./change-price-cart-card"
import { renderCartCards } from "../blocks/render-cart-cards"
import { hideCardCounter } from "./show-hide-card-counter"


function changeCountCartCard(attr, n = 1) {
    const localCart = JSON.parse(localStorage.getItem('cart'))
    const obj = localCart[attr]

    let count = obj?.count

    if (count) {
        let changedCount = +count + n
    
        if (changedCount === 0) {
            deleteCartProduct(attr)
            renderCartCards()
            hideCardCounter(attr)
    
        } else if (changedCount > 10) {
            return
        } else {
            localCart[attr].count = changedCount
            localStorage.setItem('cart', (JSON.stringify(localCart)))
            changePriceCartCard(attr, changedCount)
        }
    } else {
        addCartProduct(attr, 1)
    }
}

export default changeCountCartCard