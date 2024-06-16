function renderCartCards() {
    const containerItems = document.querySelector(`[data-cards="cart"]`)
    const arrProducts = Object.values(JSON.parse(localStorage.getItem('cart')) || []) 
    if (arrProducts.length > 0) {
        containerItems.innerHTML = ''
    } else {
        containerItems.innerHTML = ''
        const emptyPlaceholder = document.createElement('div')
        emptyPlaceholder.classList.add('empty-cart__placeholder')
        emptyPlaceholder.innerHTML = `
        <img src="public/favicon/logo.3ecb2553.svg" alt="logo">
		<h2 class="subtitle">Ваша корзина пуста.</h2>
        `
        containerItems.append(emptyPlaceholder)
    }
    
    arrProducts.forEach(product => {

        let price = 0

        if (product.radioValue === '25см') {
            price = product.price * product.count
        } else if (product.radioValue === '30см') {
            price = Math.floor(product.price * product.count * 1.25)
        } else {
            price = product.price * product.count
        }

        const element = document.createElement('article')
        element.classList.add('cart-card')
        element.setAttribute('data-card', `${product.id}`)
        element.innerHTML += `
            <div class="card__img">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="card__info">
                <h3 class="card__name">
                    ${product.name}
                </h3>
                <span class="card__price">
                    ${price}
                </span>
                <div class="product__radio${product.radioValue ? '' : ' hide'}">
                    <input type="radio" id="card-${product.id}-size-25cm" name="card-${product.id}-product-radio" value="25см">
                    <label for="card-${product.id}-size-25cm">25 см</label>

                    <input type="radio" id="card-${product.id}-size-30cm" name="card-${product.id}-product-radio" value="30см">
                    <label for="card-${product.id}-size-30cm">30 см</label>
                </div>
            </div>
            <div class="product__counter">
                <button class="product__minus counter-btn" data-minus="${product.id}">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="10" fill="#FF6800"></rect><path d="M10.1367 15.928H21.7193" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </button>
                <span class="product__count" data-count="${product.id}">${product.count}</span>
                <button class="product__plus counter-btn" data-plus="${product.id}">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="10" fill="#FF6800"></rect><path d="M15.7895 8.91223V22.6666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.91229 15.7894H22.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </button>
            </div>
        `
        const checkedRadio = element.querySelector(`input[value="${product.radioValue}"]`)
        checkedRadio ? checkedRadio.checked = true : undefined

        containerItems.append(element)
    })
            
        
}

export {renderCartCards}

