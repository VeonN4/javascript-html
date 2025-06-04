const infoEl = document.getElementById("info")
const checkNumberBtn = document.getElementById("checkNumberBtn")

function checkNumber() {
  const number = document.getElementById("numberInput").value

  if (number % 2 !== 0) {
    infoEl.innerText = `${number} adalah ganjil`
  } else {
    infoEl.innerText = `${number} adalah genap`
  }
}

checkNumberBtn.addEventListener("click", checkNumber)