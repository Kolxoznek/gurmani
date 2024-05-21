import { renderCategoryCards } from "../blocks/render-cards"

function renderCardsFromIdArray(cardsIdArray, container) {
    document.querySelector(`[data-cards="${container}"`).innerHTML = ''
        cardsIdArray.forEach(id => {
            renderCategoryCards('id', id, container)
        })
}

export default renderCardsFromIdArray