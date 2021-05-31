const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
    const x = e.clientX - e.currentTarget.offsetLeft
    const y = e.clientY - e.currentTarget.offsetTop

    const ripple = document.createElement('span')
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`

    e.currentTarget.append(ripple)

    setTimeout(() => ripple.remove(), 1000)
})