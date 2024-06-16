import '../scss/style.scss'
import '../js/blocks/slider.js'
import '../js/blocks/form-order.js'
import { renderCategoryCards } from './blocks/render-cards.js'
import calculateTotalPrice from './helpers/total-price.js'
import './blocks/product-popup.js'
import './blocks/preloader.js'
import './blocks/navigation.js'
import './helpers/toggle-favorite-card.js'
import renderCardsFromIdArray from './helpers/render-cards-id-array.js'
import { addCartProduct } from './helpers/add-del-cart-product.js'
import './helpers/change-price-cart-card.js'
import changeCountCartCard from './helpers/change-count-cart-card.js'
import toggleFavoriteCard from './helpers/toggle-favorite-card.js'
import {showCardCounter} from './helpers/show-hide-card-counter.js'
import changeCountProductPopup from './helpers/change-count-product-popup.js'
import { renderCartCards } from './blocks/render-cart-cards.js'
import calculateProductPopupPrice from './helpers/calculate-product-popup-price.js'

// вычисление суммы товаров в корзине
calculateTotalPrice()

// рендер карточек в блоке 'популярное' и 'вам может понравится'
renderCategoryCards('popular', true, 'popular')
renderCategoryCards('popular', true, 'recomend')


// рендер товаров в избранном если они были добавлены в прошлых посещениях на сайт
renderCardsFromIdArray(JSON.parse(localStorage.getItem('favorite')) || [], 'favorite')



// добавление товаров в избранное или корзину по клику на кнопки
document.addEventListener('click', e => {
    const target = e.target

    // клик по всем кнопкам избранное
    if (target.getAttribute('data-feature-btn')) {
        toggleFavoriteCard(target.getAttribute('data-feature-btn'))
    }

    // клик по всем кнопкам купить
    if (target.getAttribute('data-buy-product')) {
        const attr = target.getAttribute('data-buy-product')

        // добавить товар в корзину кол-во 1шт по умолчинию
        addCartProduct(attr)

        // кнопка в попапе товара
        if (target.classList.contains('product__button')) {
            const count = +document.querySelector('.product .product__count').textContent
            const radioWrapper = document.querySelector('.product__additionally .product__radio')
            
            if (radioWrapper.classList.contains('hide')) {
                addCartProduct(target.getAttribute('data-buy-product'), count)    
            } else {
                const radioValue = document.querySelector('input[name="product-radio"]:checked').value
                addCartProduct(target.getAttribute('data-buy-product'), count, 'radioValue', radioValue)
            }
            showCardCounter(attr)
            setTimeout(renderCartCards, 10)
            
        }

        // если клик по кнопке купить в карточках товаров
        if (target.classList.contains('add-cart__btn')) {

            // раскрыть счетчик количества товара
            showCardCounter(attr)
            changeCountCartCard(attr)
            setTimeout(renderCartCards, 10)
        }
    }

    if (target.getAttribute('data-minus')) {
        if (target.closest('.product__additionally')) {
            const parent = target.closest('.product__additionally')
            changeCountProductPopup(parent, -1)
        } else {
            const attr = target.getAttribute('data-minus')
            changeCountCartCard(attr, -1)
            setTimeout(renderCartCards, 10)
        }
    }

    if (target.getAttribute('data-plus')) {
        if (target.closest('.product__additionally')) {
            const parent = target.closest('.product__additionally')
            changeCountProductPopup(parent, 1)
        } else {
            const attr = target.getAttribute('data-plus')
            changeCountCartCard(attr, 1)
            setTimeout(renderCartCards, 10)
        }
    }
    
    if (target.closest('.cart-card .product__radio') && target.getAttribute('for')) {
        const localCart = JSON.parse(localStorage.getItem('cart'))
        setTimeout(() => {
            const parent = target.closest('.cart-card')
            const attr = parent.getAttribute('data-card')
            const radioSizeValue = parent.querySelector(`input[name="card-${attr}-product-radio"]:checked`).value
            console.log(radioSizeValue)
            
            const newLocalCart = localCart
            newLocalCart[attr].radioValue = radioSizeValue

            localStorage.setItem('cart', JSON.stringify(newLocalCart))

            renderCartCards()
        })
    }

    if (target.closest('.product__radio')) {
        calculateProductPopupPrice()
    }
})



