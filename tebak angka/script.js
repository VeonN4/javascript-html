const infoEl = document.getElementById("info")
const answerEl = document.getElementById("answer")
const revealAnswerBtn = document.getElementById("revealAnswer")

function revealNumber() {
  const userGuess = document.getElementById("guessInput").value
  const answer = Math.floor(Math.random() * 100)

  infoEl.innerText = userGuess !== answer ? `You're wrong! The answer is ${answer}` : `You're right! The answer is ${answer}`
}

revealAnswerBtn.addEventListener("click", revealNumber)

