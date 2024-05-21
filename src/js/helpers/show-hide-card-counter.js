import { showElem, hideElem } from "./show-hide-elem"

function showCardCounter(attr) {
    const counters = document.querySelectorAll(`[data-card-counter="${attr}"]`),
          buyBtns = document.querySelectorAll(`.add-cart__btn[data-buy-product="${attr}"]`)
    
    for (let i = 0; i < counters.length; i++) {

        hideElem(buyBtns[i])
        showElem(counters[i])
        setTimeout(() => {
            counters[i].classList.add('product__counter_active')
        })
    }
}

function hideCardCounter(attr) {
    const counters = document.querySelectorAll(`[data-card-counter="${attr}"]`),
          buyBtns = document.querySelectorAll(`.add-cart__btn[data-buy-product="${attr}"]`)
    
    for (let i = 0; i < counters.length; i++) {
        
        buyBtns[i].classList.remove('add-cart__btn_active')
        counters[i].classList.remove('product__counter_active')
        showElem(buyBtns[i])
        setTimeout(() => {
            hideElem(counters[i])
        })
    }
}

export {showCardCounter, hideCardCounter} 