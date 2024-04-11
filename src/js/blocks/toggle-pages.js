const pages = {}
document.querySelectorAll('[data-page]').forEach(page => {
    pages[page.id] = page
})
const navItems = {}
document.querySelectorAll('[data-nav]').forEach(navItem => {
    navItems[navItem.getAttribute('data-nav')] = navItem
})

// показать активную страницу и ее таб
function showPageAndTab(attr) {
    pages[attr].classList.remove('hide')
    navItems[attr].classList.add('nav-active')
}
// скрыть все страницы
function hidePages() {
    Object.values(pages).forEach(page => {
        page.classList.add('hide')
    })
}
// скрыть все табы
function hideTab() {
    Object.values(navItems).forEach(navItem => {
        navItem.classList.remove('nav-active')
    })
}

function togglePage(page, tab) {
    hidePages()
    hideTab()
    showPageAndTab(page, tab)
}

export { togglePage }