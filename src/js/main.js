import '../scss/style.scss'
import '../js/blocks/slider.js'
import { renderCategoryCards } from './blocks/render-cards.js'
import { renderCartCard } from './blocks/render-cart-cards.js'
import { togglePage } from './blocks/toggle-pages.js'

import axios from 'axios'


// рендер карточек в блоке 'популярное' и 'вам может понравится'
renderCategoryCards('popular', true, 'popular')
renderCategoryCards('popular', true, 'recomend')


// рендер товаров в избранном и корзине если они были добавлены в прошлых посещениях на сайт
renderCardsFromIdArray(JSON.parse(localStorage.getItem('favorite')) || [], 'favorite')
renderCardsFromIdArray(JSON.parse(localStorage.getItem('cart')) || [], 'cart')


// добавление товаров в избранное или корзину
document.addEventListener('click', e => {
    if (e.target.getAttribute('data-feature-btn')) {
        addFavoriteCard(e.target.getAttribute('data-feature-btn'))
    }

    if (e.target.getAttribute('data-buy-product')) {
        addCartCard(e.target.getAttribute('data-buy-product'))
    }
})

function addFavoriteCard(attr) {
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

function addCartCard(attr) {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const local = new Set(cart)
    
    if(!local.has(attr)) {
        local.add(attr)
    }

    const arr = [...local]
    renderCardsFromIdArray(arr, 'cart')
    localStorage.setItem('cart', JSON.stringify(arr))
}

function renderCardsFromIdArray(cardsIdArray, container) {
    document.querySelector(`[data-cards='${container}'`).innerHTML = ''
    if (container === 'cart') {
        cardsIdArray.forEach(id => {
            renderCartCard('id', id, container)
        })
    } else {
        cardsIdArray.forEach(id => {
            renderCategoryCards('id', id, container)
        })
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
      productBuy = product.querySelector('.product__button')


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
