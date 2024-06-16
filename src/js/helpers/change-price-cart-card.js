function changePriceCartCard(attr, count) {
    const product = JSON.parse(localStorage.getItem('cart'))[attr]
    const priceElements = document.querySelectorAll(`[data-card="${attr}"] .card__price, [data-buy-product="${attr}"] .product__price`)

    priceElements.forEach(priceElement => {
        priceElement.textContent = Math.floor(product.price * count * (product.radioValue === '30см' ? 1.25 : 1))
    })
}

export default changePriceCartCard