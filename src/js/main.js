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
            addCartProduct(target.getAttribute('data-buy-product'), count)
            showCardCounter(attr)
            setTimeout(renderCartCards, 10)
        }

        // если клик по кнопке купить в карточках товаров
        if (target.classList.contains('add-cart__btn')) {

            // скрыть кнопку купить
            //hideElem(target)

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
})
