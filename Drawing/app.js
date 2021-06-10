const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d')
const colorPicker = document.querySelector('#colorPicker')
const btnClear = document.querySelector('#clear')
const label = document.querySelector('label')
const btnDraw = document.querySelector('#draw')

let x, y, size = 5
let color = colorPicker.value
let isPressed = false

btnClear.addEventListener('click', () => {
    color = '#fff'

    if (size < 20) size = 20 //if choose eraser then eraser size will be 20 by default

    canvas.classList.toggle('active')
})

btnDraw.addEventListener('click', () => {
    color = colorPicker.value
    if (canvas.classList.contains('active')) {
        canvas.classList.toggle('active')
        size = 5 //reset pen size to default
    }
})

colorPicker.addEventListener('change', () => {
    if (canvas.classList.contains('active'))
        canvas.classList.toggle('active')

    color = colorPicker.value
    label.style.color = color
})

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        let x2 = e.offsetX
        let y2 = e.offsetY

        drawCircle(x2, y2, color)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y, color) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)

    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp': {
            size++
            break
        }

        case 'ArrowDown': {
            size--
            break
        }

        case 'Delete': {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
    }

    if (size > 70)
        size = 70
    else if
        (size < 1) size = 1
})