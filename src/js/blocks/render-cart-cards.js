import axios from 'axios'

function renderCartCard(key, attr, container) {
    const containerItems = document.querySelector(`[data-cards=${container}]`)
    containerItems.innerHTML = ''
    axios.get(`http://localhost:3000/products/`)
        .then(data => {
            const filteredArr = data.data.filter(item => item[key] === attr)
            return Promise.resolve(filteredArr)
        })
        .then(data => {
            data.forEach(card => {
                const element = document.createElement('article')
                element.classList.add('cart-card')
                element.setAttribute('data-card', `${card.id}`)
                element.innerHTML += `
                    <div class="card__img">
                        <img src="${card['img']}" alt="${card['name']}">
                    </div>
                    <div class="card__info">
                        <h3 class="card__name">
                            ${card['name']}
                        </h3>
                        <span class="card__price">
                            ${card['price']} ₽
                        </span>
                        <div class="product__radio">
                            <div class="product__radio-item">
                                <input type="radio" class="product__radio-input">
                                <label>25 см</label>
                            </div>
                            <div class="product__radio-item">
                                <input type="radio" class="product__radio-input">
                                <label>30 см</label>
                            </div>
                        </div>
                    </div>
                    <div class="product__counter">
                        <button class="product__minus counter-btn">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="10" fill="#FF6800"></rect><path d="M10.1367 15.928H21.7193" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button>
                        <span>1</span>
                        <button class="product__plus counter-btn">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="10" fill="#FF6800"></rect><path d="M15.7895 8.91223V22.6666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.91229 15.7894H22.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button>
                    </div>
                `
                /* if(!card.radio) {
                    element.querySelector('product__radio').classList.add('hide')
                } */
                containerItems.append(element)
            })
        })
}

export {renderCartCard}

