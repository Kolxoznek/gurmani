import renderCardsFromIdArray from "./render-cards-id-array"
import toggleFavoriteBtn from "./active-feature-btn"

// добавление/удаление карточки в избранном
function toggleFavoriteCard(attr) {
    const favorite = new Set(JSON.parse(localStorage.getItem('favorite')))

    if(favorite.has(attr)) {
        favorite.delete(attr)
    } else {
        favorite.add(attr)
    }

    const arr = [...favorite]
    renderCardsFromIdArray(arr, 'favorite')
    localStorage.setItem('favorite', JSON.stringify(arr))

    toggleFavoriteBtn(attr)
}

export default toggleFavoriteCard