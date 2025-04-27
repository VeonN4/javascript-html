const userBirthDate = document.getElementById("birthday")
const calcBtn = document.getElementById("calculate")
const resultText = document.getElementById("result")

function calculateAge() {
  const birthdayValue = userBirthDate.value
  const age = getAge(birthdayValue)

  if (birthdayValue === "") {
    alert("Please enter your birthday") 
  } 
  if (age < 0) {
    resultText.innerText = "You're not even exist bro..." 
  } else {
    resultText.innerText = `Your age is ${age}` 
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date()
  const birthdayDate = new Date(birthdayValue)

  let age = currentDate.getFullYear() - birthdayDate.getFullYear()
  const month = currentDate.getMonth() - birthdayDate.getMonth()
  
  if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
    age--
  }

  return age
}
