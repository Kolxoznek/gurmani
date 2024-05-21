let notificationActive = false

function showNotification(message, color) {
    if (notificationActive) return

    notificationActive = true

    const element = document.querySelector('.notification'),
          text = element.querySelector('p')

    element.style.backgroundColor = color
    element.style.boxShadow = `0px 0px 10px ${color}`
    text.innerText = message
    element?.classList.add('notification_show')
    
    setTimeout(hideNotification, 5000)
}

function hideNotification() {
    const element = document.querySelector('.notification')
    element?.classList.remove('notification_show')
    notificationActive = false
}

export { showNotification }