const texts = [
    "tough times dont last, tough people do.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
    "First solve the problem. Then write the code.",
    'In order to be irreplaceable, one must always be different',
    'Knowledge is power.',
    'Code is like humor. When you have to explain it, it’s bad.',
    'Fix the cause, not the symptom.',
    'Make it work, make it right, make it fast.',
    'this shj3t is so ez',
    '01101001 01110100 01110011 00100000 01100110 01110101 01101110 01101110 01111001 00100000 01110100 01101000 01100001 01110100 00100000 01110101 00100000 01110100 01110010 01100001 01101110 01110011 01101100 01100001 01110100 01100101 01100100 00100000 01110100 01101000 01101001 01110011'
]

const textContainer = document.querySelector('.text')
const startGame = document.querySelector('#start')
const result = document.querySelector('#result')
const reload = document.querySelector('#reload')

var begin
var end
var textString
var text
var curIdx
var currentCharacter
var correctCharacters

startGame.addEventListener('click', () => {

    correctCharacters = 0
    curIdx = 0
    textContainer.innerHTML = ''
    begin = null
    end = null

    textString = getRandomText()
    text = createText(textString)

    currentCharacter = text[curIdx]
    currentCharacter.classList.add('cursor')

    textContainer.classList.add('start-game')

    startGame.classList.add('close')

    document.addEventListener('keydown', keydown)
})

reload.addEventListener('click', () => {
    result.innerHTML = ''
    startGame.click()
})

const keydown = (e) => {

    if (!begin)
        begin = new Date()

    if (e.key === currentCharacter.innerText) {
        update('correct')
        correctCharacters++
    }
    else {
        if (currentCharacter.innerText != ' ')
            update('wrong')
        else
            update('wrong-space')
    }

    if (curIdx >= text.length) {

        curIdx = 0
        end = new Date()

        let delta = end - begin
        let seconds = delta / 1000
        let numberOfWords = textString.split(' ').length
        let totalCharacters = text.length
        let wpm = Math.round((numberOfWords / seconds) * 60)
        let accuracy = (correctCharacters / totalCharacters) * 100

        result.innerHTML = `
        <div class="res">
            <p class="title">${seconds}</p>
            <p>Seconds</p>
        </div>
        <div class="res">
            <p class="title">${correctCharacters}</p>
            <p>Corrected</p>
        </div>
        <div class="res">
            <p class="title">${totalCharacters - correctCharacters}</p>
            <p>Wrong</p>
        </div>
        <div class="res">
            <p class="title">${wpm}</p>
            <p>Words/min</p>
        </div>
        <div class="res">
            <p class="title">${accuracy.toFixed(2)}</p>
            <p>% Accuracy</p>
        </div>`

        document.removeEventListener('keydown', keydown)
        return
    }

    currentCharacter.classList.add('cursor')
}

function getRandomText() {
    return texts[Math.floor(Math.random() * texts.length)]
}

function createText(text) {
    return text.toLowerCase().split("").map(char => {

        let span = document.createElement('span')
        span.innerText = char

        textContainer.append(span)

        return span
    })
}

function update(toggleClass) {
    currentCharacter.classList.remove('cursor')
    currentCharacter.classList.add(toggleClass)
    currentCharacter = text[++curIdx]
}