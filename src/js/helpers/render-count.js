function renderCount(attr) {
    const obj = JSON.parse(localStorage.getItem('cart'))
    const validateObj = obj ? obj[attr] : {}
    const counters = document.querySelectorAll(`[data-count="${attr}"]`)

    counters.forEach(counter => {
        if (validateObj) {
            counter.textContent = validateObj?.count
        } else {
            counter.textContent = 1
        }
    })
}

export default renderCount