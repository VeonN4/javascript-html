const colorPicker = document.getElementById("input-color-picker");
const body = document.body

colorPicker.addEventListener("change", changeColor)

function changeColor() {
  body.style.backgroundColor = colorPicker.value
  console.log(colorPicker.value);
}


changeColor()