function calculateTotalPrice() {
    const cart = Object.values(JSON.parse(localStorage.getItem('cart')) || [])

    let totalSum = 0

    cart.forEach(item => {
        totalSum += item.price * item.count
    })

    renderTotalPrice(totalSum)
}

function renderTotalPrice(price) {
    document.querySelector('[data-price="total"]').innerText = price
}

export default calculateTotalPrice