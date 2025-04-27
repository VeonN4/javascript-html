const counterText = document.getElementById("counter")
let count = 0

function initialize() {
  showCount()
}

function addCount() {
  count++
  showCount()
}

function showCount() {
  counterText.innerText = count
}

initialize()