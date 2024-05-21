function activateBuyBtn(attr) {
    const cart = Object.keys(JSON.parse(localStorage.getItem('cart')) || {})

    const btns = document.querySelectorAll(`.add-cart__btn[data-buy-product="${attr}"]`)

    if (cart.find(id => id === attr)) {
        btns.forEach(btn => {
            btn.classList.add('add-cart__btn_active')
        })
    } else {
        btns.forEach(btn => {
            btn.classList.remove('add-cart__btn_active')
        })
    }
}

export default activateBuyBtn