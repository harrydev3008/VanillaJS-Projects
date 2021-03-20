const emojis = [
    '💗', '❤️', '💖', '💘', '💕', '⭐'
]

function createHeart() {
    let heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    console.log(Math.random() * emojis.length)

    // random heart Horizontally
    heart.style.left = `${Math.random() * 100}vw`;

    // random falling speed in range[3, 5]
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;

    document.body.append(heart);

    // remove the heart after 5s
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);