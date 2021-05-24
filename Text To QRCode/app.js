$(document).ready(() => {

    const API = "https://api.qrserver.com/v1/create-qr-code/?data";

    const qrContainer = $('.qrcode-modal')
    const btnClose = $('.btn-close')
    const qrImg = $('#qrcode-img')

    const loadAnimation = $('.loading-data')
    const input = $('#text')
    const btnGenerate = $('.btn-generate')

    btnClose.click(() => {
        qrContainer.toggleClass('active')
    })

    btnGenerate.click(async () => {
        try {
            loadAnimation.toggleClass('active')

            let text = input.val()

            let img = await fetch(`${API}=${text == '' ? 'Dont mess with me!' : text}`)
            let imgSrc = img['url']

            qrImg.attr('src', imgSrc)
            loadAnimation.toggleClass('active')
            qrContainer.toggleClass('active')

        } catch (err) {
            console.log(err)
        }
    })

})