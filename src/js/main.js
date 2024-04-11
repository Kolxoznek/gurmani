import '../scss/style.scss'
import '../js/blocks/slider.js'
import { renderCategoryCards } from './blocks/render-cards.js'
import { renderCartCard } from './blocks/render-cart-cards.js'
import { togglePage } from './blocks/toggle-pages.js'
import axios from 'axios'

const navbar = document.querySelector('.navbar')
const categories = document.querySelectorAll('.category')
const product = document.querySelector('#product')
const backBtns = document.querySelectorAll('.back-btn')
const backBtnProduct = document.querySelector('.product__head .back-btn')
const cardsContainers = {}
document.querySelectorAll('[data-cards]').forEach(container => {
    cardsContainers[container.getAttribute('data-cards')] = container
})

// кнопки назад на страницах
backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn !== backBtnProduct) {
            togglePage('main')
        }
     })
})

// навбар
navbar.addEventListener('click', e => {
    if(e.target.classList.contains('navbar__item')) { 
        togglePage(e.target.getAttribute('data-nav'))
    }
})

// открыть меню при клике на карточку категорий
categories.forEach(category => {
    category.addEventListener('click', e => {
        if (e.target.getAttribute('data-category')) {
            renderCategoryCards('category', e.target.getAttribute('data-category'), 'menu')

            document.querySelector('.menu__title').textContent = e.target.querySelector('.category__name').textContent

            togglePage('menu')
        }
    })
})

// кнопка назад в попапе товара
backBtnProduct.addEventListener('click', () => {
    product.classList.add('product_hide')
    product.classList.remove('product_show')
    document.body.classList.remove('overflow-hidden')
})


const productImg = product.querySelector('.product__img'),
      productName = product.querySelector('.product__title'),
      productPrice = product.querySelector('.product__price'),
      productDescr = product.querySelector('.product__descr'),
      productFeature = product.querySelector('.feature-btn'),
      productBuy = product.querySelector('.product__button')

// открыть попап товара
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
                            productFeature.addEventListener('click', () => {
                                addFavoriteCard(cardId)
                            })
                            productBuy.addEventListener('click', () => {
                                addCartCard(cardId)
                            })
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

function renderPopularCards() {
    renderCategoryCards('popular', true, 'popular')
}
renderPopularCards()

function addFavoriteCard(attr) {
    const favorite = JSON.parse(localStorage.getItem('favorite'))
    console.log(favorite)
    const local = new Set(favorite)
    
    if(local.has(attr)) {
        local.delete(attr)
    } else {
        local.add(attr)
    }

    const arr = [...local]
    renderFavoriteCards(arr)
    
    localStorage.setItem('favorite', JSON.stringify(arr))
}

function renderFavoriteCards(cardsIdArray) {
    document.querySelector(`[data-cards='favorite'`).innerHTML = ''
    cardsIdArray.forEach(id => {
        renderCategoryCards('id', id, 'favorite')
    })
}

function addCartCard(attr) {
    const cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart)
    const local = new Set(cart)
    
    if(!local.has(attr)) {
        local.add(attr)
    }

    const arr = [...local]
    console.log(arr)
    renderCartCards(arr)
    localStorage.setItem('cart', JSON.stringify(arr))
}

function renderCartCards(cardsIdArray) {
    document.querySelector(`[data-cards='cart']`).innerHTML = ''
    cardsIdArray.forEach(id => {
        renderCartCard('id', id, 'cart')
    })
}

// слушатель на контейнерах карточек
Object.values(cardsContainers).forEach(container => {
    container.addEventListener('click', e => {
        console.log(e.target)
        if(e.target.classList.contains('feature-btn')) {
            const attr = e.target.getAttribute('data-feature-btn')
            addFavoriteCard(attr)
            
        }
        if(e.target.classList.contains('add-cart__btn')) {
            const attr = e.target.getAttribute('data-buy-product')
            addCartCard(attr)
        }

    })
})

