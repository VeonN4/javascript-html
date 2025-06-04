const greeterEl = document.getElementById("greeter")
const greetBtn = document.getElementById("greetBtn")

function greeter() {
  const name = document.getElementById("name").value

  greeterEl.innerText = `Halo ${name}! Senang bertemu dengan mu...`
}

greetBtn.addEventListener("click", greeter)