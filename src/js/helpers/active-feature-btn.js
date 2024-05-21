function toggleFavoriteBtn(attr) {
    const favorite = new Set(JSON.parse(localStorage.getItem('favorite')))

    const btns = document.querySelectorAll(`[data-feature-btn="${attr}"]`)

    if (favorite.has(attr)) {
        btns.forEach(btn => {
            btn.classList.add('feature-btn_active')
        })
    } else {
        btns.forEach(btn => {
            btn.classList.remove('feature-btn_active')
        })
    }

}

export default toggleFavoriteBtn