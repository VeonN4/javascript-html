const calculateBtn = document.getElementById("calculateBtn")

function calculate() {
  const secondsInput = document.getElementById("seconds")
  const minutesEl = document.getElementById("minutes")
  const hoursEl = document.getElementById("hours")
  const daysEl = document.getElementById("days")
  const monthsEl = document.getElementById("months")
  const yearsEl = document.getElementById("years")

  let minutes = secondsInput.value / 60
  let hours = minutes / 60
  let days = hours / 24
  let months = days / 30
  let years = months / 12

  minutesEl.innerText = "Menit: " + minutes
  hoursEl.innerText = "Jam: " + hours
  daysEl.innerText = "Hari: " + days
  monthsEl.innerText = "Bulan: " + months
  yearsEl.innerText = "Tahun: " + years
}

calculateBtn.addEventListener("click", calculate)