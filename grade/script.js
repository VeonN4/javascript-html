const checkScoreBtn = document.getElementById("calculate")
const totalScoreEl = document.getElementById("score")
const gradeEl = document.getElementById("grade")

function checkScore() {
  const scienceScore = parseInt(document.getElementById("science").value)
  const mathScore = parseInt(document.getElementById("math").value)
  const geographyScore = parseInt(document.getElementById("geography").value)
  const historyScore = parseInt(document.getElementById("history").value)
  const indonesiaScore = parseInt(document.getElementById("indonesia").value)
  const englishScore = parseInt(document.getElementById("english").value)


  const totalScore = scienceScore + mathScore + geographyScore + historyScore + indonesiaScore + englishScore
  console.log(totalScore/6 < 90);

  if (totalScore/6 < 90) {
    gradeEl.innerText = "A"
    console.log("something")
  } if (totalScore/6 < 80) {
    gradeEl.innerText = "B"
  }

  totalScoreEl.innerText = totalScore
}

checkScoreBtn.addEventListener("click", checkScore)