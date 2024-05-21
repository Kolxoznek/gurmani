import { showElem, hideElem } from "../helpers/show-hide-elem"
import { disabledInput, enabledInput} from '../helpers/toggle-input'
import { renderCartCards } from "./render-cart-cards"
import { showNotification } from "./notification"


const orderForm = document.forms.order

const receivingType = orderForm['receiving-type']

for (let i = 0; i < receivingType.length; i++) {
    receivingType[i].addEventListener('click', () => {
        if (receivingType[0].checked) {
            hideElem(orderForm.querySelector('[for="private-house"]'))
            hideElem(orderForm.street)
            hideElem(orderForm.house)
            hideElem(orderForm.apartment)
            hideElem(orderForm.entrance)
            hideElem(orderForm.floor)
        }
        if (receivingType[1].checked) {
            showElem(orderForm.querySelector('[for="private-house"]'))
            showElem(orderForm.street)
            showElem(orderForm.house)
            showElem(orderForm.apartment)
            showElem(orderForm.entrance)
            showElem(orderForm.floor)
        }
    })
}


const timeReceipt = orderForm['time-receipt']

for (let i = 0; i < timeReceipt.length; i++) {
    timeReceipt[i].addEventListener('click', () => {
        if (timeReceipt[0].checked) {
            hideElem(orderForm['pre-order-time'])
        }
        if (timeReceipt[1].checked) {
            showElem(orderForm['pre-order-time'])
        }
    })
}

const privateHouse = orderForm['private-house']

privateHouse.addEventListener('click', () => {
    console.log(privateHouse.checked)
    if (privateHouse.checked) {
        disabledInput(orderForm.apartment)
        disabledInput(orderForm.entrance)
        disabledInput(orderForm.floor)
    } else {
        enabledInput(orderForm.apartment)
        enabledInput(orderForm.entrance)
        enabledInput(orderForm.floor)
    }
})


const submitBtn = document.querySelector('.cart-btn')

submitBtn.addEventListener('click', e => {
    handleFormSubmit(e)
})


function handleFormSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('order-form');

    const formData = new FormData(form);

    const formValues = {};

    for (let [key, value] of formData.entries()) {
        formValues[key] = value;
    }

    const cart = []

    if (localStorage.getItem('cart')) {
        Object.values(JSON.parse(localStorage.getItem('cart'))).forEach(item => {
            const {name, count} = item
    
            const objItem = {
                name: name,
                count: count
            }
    
            cart.push(objItem)
        })

        formValues.cart = cart
        document.forms.order.reset()
        localStorage.removeItem('cart')
        renderCartCards()

        if (formValues['receiving-type'] === 'Самовывоз') {
            delete formValues['private-house']
            delete formValues['street']
            delete formValues['house']
            delete formValues['apartment']
            delete formValues['entrance']
            delete formValues['floor']
        }
    
        if (formValues['time-receipt'] === 'Ближайшее время') {
            delete formValues['pre-order-time']
        }
    
        console.log(formValues);

    } else {
        showNotification('В вашей корзине нет товаров.', '#ff6800')
    }

    
}


