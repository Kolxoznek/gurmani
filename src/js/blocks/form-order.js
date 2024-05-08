import { showElem, hideElem } from "../helpers/show-hide-elem"
import { disabledInput, enabledInput} from '../helpers/toggle-input'


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




