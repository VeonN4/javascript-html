const vocalInfoEl = document.getElementById("vocalInfo")
const consonantInfoEl = document.getElementById("consonantInfo")
const checkTextBtn = document.getElementById("checkText")

function checkText() {
  const textInput = document.getElementById("textInput").value
  let textInputArr = textInput.split('');

  console.log(textInputArr);
  
  let vocalCount = 0
  let consonantCount = 0

  let vocal = ["a", "i", "u", "e", "o"]

  console.log(textInputArr in vocal)

  textInputArr.forEach(letter => {
    console.log(letter)

    if (vocal.includes(letter.toLowerCase())) {
      vocalCount += 1
    } else {
      consonantCount += 1
    }
  });

  vocalInfoEl.innerText = "Huruf Vocal: " + vocalCount
  consonantInfoEl.innerText = "Huruf Konsonan: " + consonantCount
}

checkTextBtn.addEventListener("click", checkText)