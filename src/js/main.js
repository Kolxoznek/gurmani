import '../scss/style.scss'
import '../js/blocks/slider.js'
import '../js/blocks/product.js'
import '../js/blocks/menu.js'


// создаю обьект с элементами страниц
const navbar = document.querySelector('.navbar')
const category = document.querySelector('.category')
const cardsContainers = document.querySelectorAll('[data-cards]')
const product = document.querySelector('#product')
const backBtns = document.querySelectorAll('.back-btn')
const backBtnProduct = document.querySelector('.product__head .back-btn')
const pages = {}
document.querySelectorAll('[data-page]').forEach(page => {
    pages[page.id] = page
})
const navItems = {}
document.querySelectorAll('[data-nav]').forEach(navItem => {
    navItems[navItem.getAttribute('data-nav')] = navItem
})


// показать активную страницу и ее таб
function showPageAndTab(page, tab) {
    page.classList.remove('hide')
    tab.classList.add('nav-active')
}
// скрыть все страницы
function hidePages() {
    Object.values(pages).forEach(page => {
        page.classList.add('hide')
    })
}
// скрыть все табы
function hideActiveTab() {
    Object.values(navItems).forEach(navItem => {
        navItem.classList.remove('nav-active')
    })
}

// кнопки назад на страницах
backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        hidePages()
        hideActiveTab()

        showPageAndTab(pages.main, navItems.main)
     })
})

// навбар
navbar.addEventListener('click', e => {
    if(e.target.classList.contains('navbar__item')) { 
        hideActiveTab()
        hidePages()
        
        showPageAndTab(pages[e.target.getAttribute('data-nav')], e.target)
    }
})

// открыть меню при клике на карточку категорий
category.addEventListener('click', e => {
    if (e.target.getAttribute('data-category')) {
        hideActiveTab()
        hidePages()

        showPageAndTab(pages.menu, navbar.querySelector(`[data-nav="menu"]`))
    }
})

// кнопка назад в попапе товара
backBtnProduct.addEventListener('click', () => {
    product.classList.add('product_hide')
    product.classList.remove('product_show')
    document.body.classList.remove('overflow-hidden')
})

// открыть попап товара
cardsContainers.forEach(container => {
    container.addEventListener('click', e => {
        if(e.target.getAttribute('data-card')) {
            product.classList.add('product_show')
            product.classList.remove('product_hide')
            
            setTimeout(() => {
                document.body.classList.add('overflow-hidden')
            }, 600)
        }
    })
})



