let FaqItem = document.querySelectorAll('.faq-item__wrapper')

FaqItem.forEach(element => {
    element.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('opened')
    })
})