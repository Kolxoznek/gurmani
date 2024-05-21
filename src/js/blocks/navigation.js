import { renderCategoryCards } from "./render-cards"
import { renderCartCards } from "./render-cart-cards"
import { togglePage } from "./toggle-pages"

// кнопки назад на страницах

const product = document.querySelector('#product')
const backBtns = document.querySelectorAll('.back-btn')
const backBtnProduct = product.querySelector('.product__head .back-btn')

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