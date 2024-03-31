const popularContainer = document.querySelector('.popular__items')
const modal = document.querySelector('.product__modal')
const app = document.querySelector('#app')
const backArrowModal = modal.querySelector('.back-arrow__btn')

popularContainer.addEventListener('click', e => {
    if(e.target.hasAttribute('data-product')) {
        const nameProduct = e.target.querySelector('.popular__name').innerText
        const descrProduct = e.target.querySelector('.popular__desc').innerText
        const priceProduct = e.target.querySelector('.popular__price').innerText
        
        showProductModal(nameProduct, descrProduct, priceProduct)
    }
    
})

function toggleModal() {
    modal.classList.toggle('product__modal_show')
    app.style.display = 'none'
}

function showProductModal(nameProduct, descrProduct, priceProduct) {
    const name = modal.querySelector('.product__title')
    const descr = modal.querySelector('.product__descr')
    const price = modal.querySelector('.product__button-price')

    name.innerText = nameProduct
    descr.innerText = descrProduct
    price.innerText = priceProduct + '₽'

    toggleModal()
}

hideProductModal.addEventListener('click', () => {
    toggleModal()
})