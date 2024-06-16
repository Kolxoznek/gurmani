import calculateProductPopupPrice from "./calculate-product-popup-price";

function changeCountProductPopup(parentEl, n) {
    const countEl = parentEl.querySelector('[data-count]');

    // Изменение количества товара
    let initialCount = +countEl.textContent;
    let changedCount = initialCount + n;

    if (changedCount > 0 && changedCount <= 10) {
        // Обновляем количество товара
        countEl.textContent = changedCount;

        calculateProductPopupPrice()
    } else {
        // Если новое количество недопустимо, не делаем ничего
        return;
    }
}

export default changeCountProductPopup