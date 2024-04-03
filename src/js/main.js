import '../scss/style.scss'
import '../js/blocks/slider.js'
import '../js/blocks/product.js'
import '../js/blocks/menu.js'
//import '../js/blocks/menu-cards.js'


// создаю обьект с элементами страниц
const navbar = document.querySelector('.navbar')
const categories = document.querySelectorAll('.category')
const product = document.querySelector('#product')
const backBtns = document.querySelectorAll('.back-btn')
const backBtnProduct = document.querySelector('.product__head .back-btn')
const cardsContainers = {}
document.querySelectorAll('[data-cards]').forEach(container => {
    cardsContainers[container.getAttribute('data-cards')] = container
})
console.log(cardsContainers)
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
        if(btn === backBtnProduct) {  
        } else {
            hidePages()
            hideActiveTab()
    
            showPageAndTab(pages.main, navItems.main)
        }
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

// кнопка назад в попапе товара
backBtnProduct.addEventListener('click', () => {
    
    product.classList.add('product_hide')
    product.classList.remove('product_show')
    document.body.classList.remove('overflow-hidden')
})

// открыть попап товара
Object.values(cardsContainers).forEach(container => {
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

// открыть меню при клике на карточку категорий
categories.forEach(category => {
    category.addEventListener('click', e => {
        if (e.target.getAttribute('data-category')) {
            hideActiveTab()
            hidePages()
    
            renderCategoryCards(e.target.getAttribute('data-category'), 'menu')

            pages.menu.querySelector('.menu__title').textContent = e.target.querySelector('.category__name').textContent
    
            showPageAndTab(pages.menu, navbar.querySelector(`[data-nav="menu"]`))
        }
    })
})

function renderCategoryCards(attr, container) {
    fetch(`http://localhost:3000/${attr || ''}`)
        .then(data => {
            return data.json()
        })
        .then(data => {
            const containerItems = document.querySelector(`[data-cards=${container}]`)
            containerItems.innerHTML = ''
            data.forEach(card => {
                const element = document.createElement('article')
                element.classList.add('card')
                element.setAttribute('data-card', '0005')
                element.innerHTML += `
                    <div class="card__top">
                        <img src="${card['img']}" alt="">
                    </div>
                    <div class="card__middle">
                        <h3 class="card__name">
                            ${card['name']}
                        </h3>
                        <span class="card__desc">
                            ${card['card-descr']}
                        </span>
                    </div>
                    <div class="card__bottom">
                        <span class="card__price">
                            ${card['price']} ₽
                        </span>
                        <a href="#" class="add-cart__btn">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#ff6800" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 3.5C1.5 2.39543 2.39543 1.5 3.5 1.5H20.5C21.6046 1.5 22.5 2.39543 22.5 3.5V20.5C22.5 21.6046 21.6046 22.5 20.5 22.5H3.5C2.39543 22.5 1.5 21.6046 1.5 20.5V3.5Z" stroke="#FF6800" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 7.33331V16.6666" stroke="#2c2c2c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.33337 12H16.6667" stroke="#2c2c2c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </a>
                    </div>
                `

                containerItems.append(element)
            })
        })
}


