function changePriceCartCard(attr, count) {
    const price = JSON.parse(localStorage.getItem('cart'))[attr].price
    const priceElements = document.querySelectorAll(`[data-card="${attr}"] .card__price, [data-buy-product="${attr}"] .product__price`)

    priceElements.forEach(priceElement => {
        priceElement.textContent = price * count
    })
}

export default changePriceCartCard