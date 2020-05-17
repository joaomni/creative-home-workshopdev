function onOff() {
    const modal = document.querySelector("#modal")
    modal.classList.toggle("hide") 

    document
        .querySelector('body')
        .classList
        .toggle('hideScroll')

    document
        .querySelector('#modal')
        .classList
        .toggle('addScroll')
}   