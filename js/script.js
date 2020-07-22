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

function displayMessage (msg) {
    msgElement.innerHTML = `
    <div><p>You said: </p></div>
    <span class="box">${msg}</span>
    `
}

function checkNumber (msg) {
    const number = +msg

    // to check if number is vaid or not
    if(Number.isNaN(number)){
        msgElement.innerHTML += "<div>It is not a valid number.</div>"
        return
    }

    //check in range
    if(number > 100 || number < 1){
        msgElement.innerHTML += "<div>The number should be in range 1 to 100</div>"
        return
    }

    //compairing and checking number
    if(number === randomNum){
        document.body.innerHTML =  `<h1>Yay! you have guessed the number!<h1> <br> 
        <h1>It was ${randomNum}</h1>
        <button class="play-again" id="play-again">Play Again</button>`
    }
    else if(number > randomNum){
        msgElement.innerHTML += `<div>GO LOWER</div>`
    }
    else{
        msgElement.innerHTML += `<div>GO HIGHER</div>`
    }

}

// speak result
recognition.addEventListener("result", (event) => {
   const capturedMessage = event.results[0][0].transcript

    displayMessage(capturedMessage)
    checkNumber(capturedMessage)
})

//end SR service
recognition.addEventListener("end", () => recognition.start())

console.log(randomNum)

// making play again button work
document.addEventListener("click", (event) => {
    if(event.target.id === "play-again"){
        window.location.reload()
    }    
})