function changeCountProductPopup(parentEl, n) {
    const countEl = parentEl.querySelector('[data-count]');
    const priceEl = countEl.closest('.product__buy-wrapper').querySelector('.product__price');

    // Изменение количества товара
    let initialCount = +countEl.textContent;
    let changedCount = initialCount + n;
    let pricePerItem = +priceEl.dataset.pricePerItem;

    if (changedCount > 0 && changedCount <= 10) {
        // Обновляем количество товара
        countEl.textContent = changedCount;
        // Пересчитываем и обновляем цену
        let newPrice = pricePerItem * changedCount;
        priceEl.textContent = newPrice
    } else {
        // Если новое количество недопустимо, не делаем ничего
        return;
    }
}

export default changeCountProductPopup