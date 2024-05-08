function disabledInput(elem) {
    elem.setAttribute('disabled', '')
    elem.classList.add('disabled-element')
}

function enabledInput(elem) {
    elem.removeAttribute('disabled')
    elem.classList.remove('disabled-element')
}

export {disabledInput, enabledInput}