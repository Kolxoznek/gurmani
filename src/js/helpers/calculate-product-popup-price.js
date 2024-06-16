function calculateProductPopupPrice() {
    const productModal = document.querySelector('.product')
    const priceElement = productModal.querySelector('.product__price')
    const pricePerItem = priceElement.dataset.pricePerItem
    const productCount = +productModal.querySelector('[data-count]').textContent
    const sizeRadioBtns = productModal.querySelector('input:checked').value


    if (sizeRadioBtns === '30см') {
        priceElement.textContent = Math.floor(pricePerItem * productCount * 1.25)
    } else {
        priceElement.textContent = pricePerItem * productCount
    }
}

export default calculateProductPopupPrice