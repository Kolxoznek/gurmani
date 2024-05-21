import axios from 'axios'
import sliceText from '../helpers/slice-text'
import activateFavoriteBtn from '../helpers/active-feature-btn'
import activateBuyBtn from '../helpers/activate-buy-btn'
import {showCardCounter} from '../helpers/show-hide-card-counter'
import changePriceCartCard from '../helpers/change-price-cart-card'

function renderCategoryCards(key, attr, container) {
    const containerItems = document.querySelector(`[data-cards=${container}]`)
    containerItems.innerHTML = ''
    axios.get(`http://localhost:3000/products/`)
        .then(data => {
            const filteredArr = data.data.filter(item => item[key] === attr)
            return filteredArr
        })
        .then(data => {
            data.forEach(card => {
                const localCart = JSON.parse(localStorage.getItem('cart')) || {}
                const count = localCart[card.id]?.count || 1

                containerItems.insertAdjacentHTML('afterbegin', `
                <article class="card" data-card="${card.id}">
                    <div class="card__top">
                        <img src="${card['img']}" alt="${card['name']}">
                        <button data-feature-btn="${card.id}" class="feature-btn">
                            <svg width="32" height="32" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="favorite-icon" style="fill: rgb(255, 255, 255);"><mask id="path-1-inside-1_381:17179" fill="white"><path class="favorite-icon-path" d="M14.953 5.73417C16.2247 4.24084 18.173 3.29584 20.203 3.29584C23.7964 3.29584 26.6197 6.11917 26.6197 9.7125C26.6197 14.1189 22.6596 17.7099 16.6595 23.1508L16.6447 23.1642L14.953 24.7042L13.2614 23.1758L13.2153 23.134C7.23278 17.6975 3.28638 14.1112 3.28638 9.7125C3.28638 6.11917 6.10971 3.29584 9.70304 3.29584C11.733 3.29584 13.6814 4.24084 14.953 5.73417ZM14.953 21.5542L15.0697 21.4375C20.623 16.4092 24.2864 13.0842 24.2864 9.7125C24.2864 7.37917 22.5364 5.62917 20.203 5.62917C18.4064 5.62917 16.6564 6.78417 16.0497 8.3825H13.868C13.2497 6.78417 11.4997 5.62917 9.70304 5.62917C7.36971 5.62917 5.61971 7.37917 5.61971 9.7125C5.61971 13.0842 9.28304 16.4092 14.8364 21.4375L14.953 21.5542Z"></path></mask><path class="favorite-icon-path" d="M14.953 5.73417C16.2247 4.24084 18.173 3.29584 20.203 3.29584C23.7964 3.29584 26.6197 6.11917 26.6197 9.7125C26.6197 14.1189 22.6596 17.7099 16.6595 23.1508L16.6447 23.1642L14.953 24.7042L13.2614 23.1758L13.2153 23.134C7.23278 17.6975 3.28638 14.1112 3.28638 9.7125C3.28638 6.11917 6.10971 3.29584 9.70304 3.29584C11.733 3.29584 13.6814 4.24084 14.953 5.73417ZM14.953 21.5542L15.0697 21.4375C20.623 16.4092 24.2864 13.0842 24.2864 9.7125C24.2864 7.37917 22.5364 5.62917 20.203 5.62917C18.4064 5.62917 16.6564 6.78417 16.0497 8.3825H13.868C13.2497 6.78417 11.4997 5.62917 9.70304 5.62917C7.36971 5.62917 5.61971 7.37917 5.61971 9.7125C5.61971 13.0842 9.28304 16.4092 14.8364 21.4375L14.953 21.5542Z" fill="white"></path><path class="favorite-icon-path" d="M14.953 5.73417L14.1917 6.38251L14.953 7.27657L15.7144 6.38251L14.953 5.73417ZM16.6595 23.1508L17.3312 23.8916L17.3312 23.8916L16.6595 23.1508ZM16.6447 23.1642L15.973 22.4234L15.9715 22.4247L16.6447 23.1642ZM14.953 24.7042L14.2827 25.4462L14.9556 26.0542L15.6262 25.4437L14.953 24.7042ZM13.2614 23.1758L12.5889 23.9159L12.591 23.9179L13.2614 23.1758ZM13.2153 23.134L12.5428 23.8741L12.5428 23.8741L13.2153 23.134ZM15.0697 21.4375L14.3985 20.6962L14.3801 20.7129L14.3626 20.7304L15.0697 21.4375ZM14.953 21.5542L14.2459 22.2613L14.953 22.9684L15.6601 22.2613L14.953 21.5542ZM16.0497 8.3825V9.3825H16.7398L16.9846 8.73736L16.0497 8.3825ZM13.868 8.3825L12.9354 8.74331L13.1827 9.3825H13.868V8.3825ZM14.8364 21.4375L15.5435 20.7304L15.5259 20.7129L15.5076 20.6962L14.8364 21.4375ZM20.203 2.29584C17.8703 2.29584 15.647 3.3769 14.1917 5.08583L15.7144 6.38251C16.8025 5.10477 18.4758 4.29584 20.203 4.29584V2.29584ZM27.6197 9.7125C27.6197 5.56689 24.3487 2.29584 20.203 2.29584V4.29584C23.2441 4.29584 25.6197 6.67146 25.6197 9.7125H27.6197ZM17.3312 23.8916C20.3113 21.1893 22.8661 18.8759 24.6639 16.6766C26.4732 14.4632 27.6197 12.2439 27.6197 9.7125H25.6197C25.6197 11.5875 24.7862 13.3669 23.1154 15.4108C21.4331 17.4688 19.0078 19.6714 15.9878 22.41L17.3312 23.8916ZM17.3164 23.905L17.3312 23.8916L15.9878 22.41L15.973 22.4234L17.3164 23.905ZM15.6262 25.4437L17.3179 23.9037L15.9715 22.4247L14.2799 23.9647L15.6262 25.4437ZM12.591 23.9179L14.2827 25.4462L15.6234 23.9622L13.9318 22.4338L12.591 23.9179ZM12.5428 23.8741L12.5889 23.9159L13.9339 22.4358L13.8878 22.3939L12.5428 23.8741ZM2.28638 9.7125C2.28638 12.2395 3.42894 14.4554 5.23255 16.6662C7.02463 18.8629 9.57149 21.1739 12.5428 23.8741L13.8878 22.3939C10.8766 19.6575 8.459 17.4572 6.78225 15.4019C5.11701 13.3608 4.28638 11.5842 4.28638 9.7125H2.28638ZM9.70304 2.29584C5.55743 2.29584 2.28638 5.56689 2.28638 9.7125H4.28638C4.28638 6.67146 6.662 4.29584 9.70304 4.29584V2.29584ZM15.7144 5.08583C14.2591 3.3769 12.0358 2.29584 9.70304 2.29584V4.29584C11.4303 4.29584 13.1036 5.10477 14.1917 6.38251L15.7144 5.08583ZM14.3626 20.7304L14.2459 20.8471L15.6601 22.2613L15.7768 22.1446L14.3626 20.7304ZM23.2864 9.7125C23.2864 11.0292 22.5698 12.4702 21.0008 14.3035C19.4415 16.1255 17.1927 18.1662 14.3985 20.6962L15.7409 22.1788C18.5001 19.6805 20.8596 17.5445 22.5203 15.604C24.1713 13.6748 25.2864 11.7674 25.2864 9.7125H23.2864ZM20.203 6.62917C21.9841 6.62917 23.2864 7.93146 23.2864 9.7125H25.2864C25.2864 6.82689 23.0887 4.62917 20.203 4.62917V6.62917ZM16.9846 8.73736C17.433 7.55607 18.7902 6.62917 20.203 6.62917V4.62917C18.0225 4.62917 15.8797 6.01227 15.1148 8.02764L16.9846 8.73736ZM13.868 9.3825H16.0497V7.3825H13.868V9.3825ZM9.70304 6.62917C11.1144 6.62917 12.4759 7.55543 12.9354 8.74331L14.8007 8.0217C14.0236 6.01291 11.885 4.62917 9.70304 4.62917V6.62917ZM6.61971 9.7125C6.61971 7.93146 7.922 6.62917 9.70304 6.62917V4.62917C6.81742 4.62917 4.61971 6.82689 4.61971 9.7125H6.61971ZM15.5076 20.6962C12.7134 18.1662 10.4646 16.1255 8.9053 14.3035C7.33631 12.4702 6.61971 11.0292 6.61971 9.7125H4.61971C4.61971 11.7674 5.73478 13.6748 7.38579 15.604C9.04651 17.5445 11.406 19.6805 14.1652 22.1788L15.5076 20.6962ZM15.6601 20.8471L15.5435 20.7304L14.1293 22.1446L14.2459 22.2613L15.6601 20.8471Z" fill="white" mask="url(#path-1-inside-1_381:17179)"></path></svg>
                        </button>
                    </div>
                    <div class="card__middle">
                        <h3 class="card__name">
                            ${sliceText(card['name'])}
                        </h3>
                        <span class="card__desc">
                            ${sliceText(card['card-descr'])}
                        </span>
                    </div>
                    <div class="card__bottom">
                        <span class="card__price">
                            ${card['price']}
                        </span>
                        <button class="add-cart__btn" data-buy-product="${card.id}">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="10" fill="#fdb571"></rect><path d="M15.7895 8.91223V22.6666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.91229 15.7894H22.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button>

                        <div class="product__counter hide" data-card-counter="${card.id}">
                            <button class="product__minus counter-btn" data-minus="${card.id}">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="10" fill="#FF6800"></rect><path d="M10.1367 15.928H21.7193" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </button>
                            <span class="product__count" data-count="${card.id}">
                                ${count}
                            </span>
                            <button class="product__plus counter-btn" data-plus="${card.id}">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="10" fill="#FF6800"></rect><path d="M15.7895 8.91223V22.6666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.91229 15.7894H22.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </button>
                        </div>
                    </div>
                </article>
                `)

                activateFavoriteBtn(card.id)
                activateBuyBtn(card.id)
                
                
                
                if (localCart[card.id]) {
                    showCardCounter(card.id)
                    changePriceCartCard(card.id, count)
                }


            })
        })
}


export {renderCategoryCards}

