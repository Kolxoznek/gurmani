import '../scss/style.scss'
import '../js/blocks/slider.js'
//import '../js/blocks/product.js'
console.log(1)
/* import fs from 'fs'

fs.readFile('src/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(JSON.parse(data));
  }); */

/* fetch('http://localhost:3000/menu')
    .then(data => {
        return data.json()
    })
    .then(data => {
        createPopularCard(data.pizza[0].name, data.pizza[0].img, data.pizza[0].price)
    }) */

function createPopularCard(name, img, price) {
    const container = document.querySelector('.popular__items')
    const elem = document.createElement('article')
    elem.classList.add("popular__item")
    elem.innerHTML = `
    <div class="popular__img"><img src=${img} alt=${name}></div>
        <div class="popular__info">
            <h3 class="popular__name">
                ${name}
            </h3>
            <span class="popular__desc">
                16шт/350гр
            </span>
            <div>
                <span class="popular__price">
                    ${price}
                </span>
                <a href="#" class="add-cart__btn">
                    <svg data-v-37865217="" width="24" height="24" viewBox="0 0 24 24" fill="#ff6800" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 3.5C1.5 2.39543 2.39543 1.5 3.5 1.5H20.5C21.6046 1.5 22.5 2.39543 22.5 3.5V20.5C22.5 21.6046 21.6046 22.5 20.5 22.5H3.5C2.39543 22.5 1.5 21.6046 1.5 20.5V3.5Z" stroke="#FF6800" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 7.33331V16.6666" stroke="#2c2c2c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.33337 12H16.6667" stroke="#2c2c2c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </a>
            </div>
        </div>
    `
    container.append(elem)
}



const navbar = document.querySelector('.navbar')
const main = document.getElementById('main')
const cart = document.getElementById('cart')
const favorite = document.getElementById('favorite')

navbar.addEventListener('click', e => {
    if(e.target.classList.contains('navbar__item')) {
        const dataNav = e.target.getAttribute('data-nav')
        const page = document.getElementById(dataNav)
        
        hideActiveTab()
        e.target.classList.add('nav-active')
        hidePages()
        page.classList.toggle('hide')
    }
})


function hidePages() {
    main.classList.add('hide')
    cart.classList.add('hide')
    favorite.classList.add('hide')
}
function hideActiveTab() {
    const navItem = document.querySelectorAll('[data-nav]')
    for(let item of navItem) {
        item.classList.remove('nav-active')
    }
}




