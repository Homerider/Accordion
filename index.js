let faqItem = document.querySelectorAll('.faq-item__wrapper')

faqItem.forEach(element => {
    element.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('opened')
    })
})