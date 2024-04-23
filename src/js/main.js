import '../scss/style.scss'
import '../js/blocks/slider.js'
import { renderCategoryCards } from './blocks/render-cards.js'
import { renderCartCards } from './blocks/render-cart-cards.js'
import { togglePage } from './blocks/toggle-pages.js'

import axios from 'axios'


// рендер карточек в блоке 'популярное' и 'вам может понравится'
renderCategoryCards('popular', true, 'popular')
renderCategoryCards('popular', true, 'recomend')


// рендер товаров в избранном если они были добавлены в прошлых посещениях на сайт
renderCardsFromIdArray(JSON.parse(localStorage.getItem('favorite')) || [], 'favorite')

// добавление/удаление карточки в избранном
function toggleFavoriteCard(attr) {
    const favorite = JSON.parse(localStorage.getItem('favorite'))
    const local = new Set(favorite)
    
    if(local.has(attr)) {
        local.delete(attr)
    } else {
        local.add(attr)
    }

    const arr = [...local]
    renderCardsFromIdArray(arr, 'favorite')
    localStorage.setItem('favorite', JSON.stringify(arr))
}

function renderCardsFromIdArray(cardsIdArray, container) {
    document.querySelector(`[data-cards="${container}"`).innerHTML = ''
        cardsIdArray.forEach(id => {
            renderCategoryCards('id', id, container)
        })
}


function addCartProduct(attr, count = 1) {
    axios.get('http://localhost:3000/products')
    .then(data => {
            let objLocal = JSON.parse(localStorage.getItem('cart'));
            if (!objLocal) {
                objLocal = {}
            }
            const product = data.data.find(item => {
                return item.id === attr
            })
            product.count = count

            objLocal[product.id] = product
            localStorage.setItem('cart', JSON.stringify(objLocal))
        })
}

function deleteCartProduct(attr) {
    const objLocal = JSON.parse(localStorage.getItem('cart'))
    delete objLocal[attr]
    localStorage.setItem('cart', JSON.stringify(objLocal))
    }



// добавление товаров в избранное или корзину по клику на кнопки
document.addEventListener('click', e => {

    if (e.target.getAttribute('data-feature-btn')) {
        toggleFavoriteCard(e.target.getAttribute('data-feature-btn'))
    }

    if (e.target.getAttribute('data-buy-product')) {
        addCartProduct(e.target.getAttribute('data-buy-product'))

        if (e.target.classList.contains('product__button')) {
            const count = document.querySelector('.product .product__count').textContent
            addCartProduct(e.target.getAttribute('data-buy-product'), count)
        }
    }

    if (e.target.getAttribute('data-cart-minus')) {
        changeCountCartCard(-1, e.target.getAttribute('data-cart-minus'))

    }

    if (e.target.getAttribute('data-cart-plus')) {
        changeCountCartCard(1, e.target.getAttribute('data-cart-plus'))

    }
})

function changePriceCartCard(attr, count) {
    const price = JSON.parse(localStorage.getItem('cart'))[attr].price
    const priceElement = document.querySelector(`.cart-card[data-card="${attr}"] .card__price`)

    priceElement.textContent = price * +count.textContent + '₽'
}

function changeCountCartCard(n, attr) {
    let count = document.querySelector(`[data-cart-count="${attr}"]`)
    count.textContent = +count.textContent + n

    if (+count.textContent === 0) {
        deleteCartProduct(attr)
        renderCartCards()
    } else if (+count.textContent > 10) {
        count.textContent = 10
        addCartProduct(attr, +count.textContent)
    } else {
        addCartProduct(attr, +count.textContent)
        changePriceCartCard(attr, count)
    }
}


// кнопки назад на страницах

const product = document.querySelector('#product')
const backBtns = document.querySelectorAll('.back-btn')
const backBtnProduct = document.querySelector('.product__head .back-btn')

backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn === backBtnProduct) {
            product.classList.add('product_hide')
            product.classList.remove('product_show')
            document.body.classList.remove('overflow-hidden')
            document.querySelector('#product .product__count').textContent = 1
        } else {
            togglePage('main')
        }
     })
})


// навбар

const navbar = document.querySelector('.navbar')

navbar.addEventListener('click', e => {
    if(e.target.classList.contains('navbar__item')) { 
        
        if(e.target.getAttribute('data-nav') === 'menu') {
            renderCategoryCards('category', 'sushi-sets', 'menu')
        }
        if(e.target.getAttribute('data-nav') === 'cart') {
            renderCartCards()
            
        }
        togglePage(e.target.getAttribute('data-nav'))
    }
})



// открыть меню при клике на карточку категорий

const categories = document.querySelectorAll('.category')

categories.forEach(category => {
    category.addEventListener('click', e => {
        if (e.target.getAttribute('data-category')) {
            renderCategoryCards('category', e.target.getAttribute('data-category'), 'menu')
            document.querySelector('.menu__title').textContent = e.target.querySelector('.category__name').textContent

            togglePage('menu')
        }
    })
})


// открыть попап товара

const productImg = product.querySelector('.product__img'),
      productName = product.querySelector('.product__title'),
      productPrice = product.querySelector('.product__price'),
      productDescr = product.querySelector('.product__descr'),
      productFeature = product.querySelector('.feature-btn'),
      productBuy = product.querySelector('.product__button'),
      productCountWrapper = product.querySelector('.product__counter'),
      countNumber = productCountWrapper.querySelector('.product__count'),
      productRadioWrapper = product.querySelector('.product__radio')

let price

productCountWrapper.addEventListener('click', e => {
    let count = countNumber.textContent
    


    if (e.target.classList.contains('product__minus') && count > 1) {
        count--
    } 
    
    if (e.target.classList.contains('product__plus') && count < 10) {
        count++
    } 
    countNumber.textContent = count

    productPrice.textContent = price * count + '₽'
    })

const cardsContainers = {}
document.querySelectorAll('[data-cards]').forEach(container => {
    cardsContainers[container.getAttribute('data-cards')] = container
})


Object.values(cardsContainers).forEach(container => {
    container.addEventListener('click', e => {
        const cardId = e.target.getAttribute('data-card')
        if(cardId) {
            axios.get('http://localhost:3000/products')
                .then(data => {
                    data.data.forEach(item => {
                        if (item.id === cardId) {
                            productImg.src = item.img
                            productName.textContent = item.name
                            productPrice.textContent = item.price + '₽'
                            productDescr.textContent = item.descr
                            productFeature.setAttribute('data-feature-btn', cardId)
                            productBuy.setAttribute('data-buy-product', cardId)
                            productCountWrapper.setAttribute('data-counter', cardId)
                            price = item.price

                            if (item.radio) {
                                productRadioWrapper.classList.remove('hide')
                            } else {
                                productRadioWrapper.classList.add('hide')
                            }
                            
                        }
                    })
                })

            product.classList.add('product_show')
            product.classList.remove('product_hide')
            
            setTimeout(() => {
                document.body.classList.add('overflow-hidden')
            }, 600)
        }
    })
})



