import axios from "axios"
import toggleFavoriteBtn from "../helpers/active-feature-btn"
import renderCount from "../helpers/render-count"
// открыть попап товара

const productImg = product.querySelector('.product__img'),
      productName = product.querySelector('.product__title'),
      productPrice = product.querySelector('.product__price'),
      productDescr = product.querySelector('.product__descr'),
      productFeature = product.querySelector('.feature-btn'),
      productBuy = product.querySelector('.product__button'),
      productCountWrapper = product.querySelector('.product__counter'),
      productCountPlus = productCountWrapper.querySelector('.product__plus'),
      productCountMinus = productCountWrapper.querySelector('.product__minus'),
      productCount = productCountWrapper.querySelector('.product__count'),
      productRadioWrapper = product.querySelector('.product__radio'),
      productRadioInputs = productRadioWrapper.querySelectorAll('[name="product-radio"]')

const cardsContainers = {}
document.querySelectorAll('[data-cards]').forEach(container => {
    cardsContainers[container.getAttribute('data-cards')] = container
})


Object.values(cardsContainers).forEach(container => {
    container.addEventListener('click', e => {
        const card = e.target.closest('[data-card]')

        if (!card || e.target.closest('.add-cart__btn, .feature-btn, .product__counter, .product__radio')) return

        const cardId = card.getAttribute('data-card')

        const local = JSON.parse(localStorage?.getItem('cart'))
        let count = local[cardId] ? local[cardId].count : 1
        let radioValue = local[cardId] ? local[cardId].radioValue : null

        if (radioValue) {
            productRadioInputs.forEach(input => {
                if (input.value === radioValue) {
                    input.checked = true
                } else {
                    input.checked = false
                }
            })
            
        }

        axios.get('http://localhost:3000/products')
            .then(data => {
                data.data.forEach(item => {
                    if (item.id === cardId) {
                        productImg.src = item.img
                        productName.textContent = item.name
                        productPrice.textContent = item.price * count
                        productPrice.setAttribute('data-price-per-item', item.price)
                        productDescr.textContent = item.descr
                        productFeature.setAttribute('data-feature-btn', cardId)
                        productBuy.setAttribute('data-buy-product', cardId)
                        productCountWrapper.setAttribute('data-counter', cardId)
                        productCountPlus.setAttribute('data-plus', cardId)
                        productCountMinus.setAttribute('data-minus', cardId)
                        productCount.setAttribute('data-count', cardId)

                        if (item.category === 'pizza') {
                            productRadioWrapper.classList.remove('hide')
                        } else {
                            productRadioWrapper.classList.add('hide')
                        }
                        
                        toggleFavoriteBtn(cardId)
                    }
                })
            })

        product.classList.add('product_show')
        product.classList.remove('product_hide')
        setTimeout(() => {
            renderCount(cardId)
            document.body.classList.add('overflow-hidden')
        }, 600)
    })
})
