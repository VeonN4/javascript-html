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

  totalScoreEl.innerText = totalScore
  gradeEl.innerText = (totalScore/6) > 100 ? "A" : (totalScore/6) > 80 ? "B" : (totalScore/6) > 60 ? "C" : (totalScore/6) > 30 ? "D" : (totalScore/6) > 20 ? "E" : "F"
}

checkScoreBtn.addEventListener("click", checkScore)