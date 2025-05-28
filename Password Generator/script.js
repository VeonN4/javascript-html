const passwordDiv = document.getElementById("password-value");
const passwordBtn = document.getElementById("generate")

const DIGITS = "1234567890"
const UPPERCASE = "qwertyuiopasdfghjklzxcvbnm"
const LOWERCASE = "QWERTYUIOPASDFGHJKLZXCVBNM"
const PUNCTUATION = "!@#$%^&*()"

let password = ""
let passwordString = ""

function generatePassword() {
  let hasDigits = document.getElementById("hasDigits").checked;
  let hasUppercase = document.getElementById("hasUppercase").checked;
  let hasLowercase = document.getElementById("hasLowercase").checked;
  let hasPunctuation = document.getElementById("hasPunctuation").checked;
  let passwordLength = document.getElementById("passwordLength").value;

  password = ""
  passwordString = ""

  if (hasDigits) {
    passwordString
  } if (hasUppercase) {
    passwordString += UPPERCASE 
  } if (hasLowercase) {
    passwordString += LOWERCASE 
  } if (hasPunctuation) {
    passwordString += PUNCTUATION 
  } else {
    passwordString += LOWERCASE 
  }


  for (let index = 0; index < passwordLength; index++) {
    password += passwordString[Math.floor(Math.random() * (passwordString.length))];
  }

  passwordDiv.innerText = password
};

passwordBtn.addEventListener("click", generatePassword)