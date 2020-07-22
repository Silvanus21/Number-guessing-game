const randomNum = generateRandomNumber()
const msgElement = document.querySelector("#msg")

//generate random number between 1 and 100
function generateRandomNumber () {
    return Math.floor(Math.random() * 100) + 1
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

let recognition = new window.SpeechRecognition()

// start recognition game
recognition.start()

// speak result
recognition.addEventListener("result", (event) => {
    console.log(event.results[0][0].transcript)
})