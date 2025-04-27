const formulas = [
  {
    title: "Test",
    description: "Lorem ipsum",
    inputs: [
      { label: "Input 1", unit: "m" }
    ],
    formulas_list: [
      { label: "Test", formula: (inputs) => inputs[0] * inputs[0]}
    ],
    
  }
];

window.onload = () => {
  const container = document.getElementById("cards-container");
  formulas.forEach((formula, index) => {
    
    const card = document.createElement("div");
    card.className = 'card-content'
    card.innerHTML = `
      <h3>${formula.title}</h3>
      <p>${formula.description}</p>
      <button onclick="openModal(${index})">Open</button>
    `;
    container.appendChild(card);
  });
};

let currentFormula = null;

function openModal(index) {
  currentFormula = formulas[index];
  const modal = document.getElementById("calculation-modal");
  const modalContent = document.getElementById("modal-content");
  document.getElementById('modal-title').textContent = currentFormula.title;

  const calculateBtn = document.createElement("div");
  
  const inputsContainer = document.getElementById("modal-input");
  inputsContainer.innerHTML = ''
  
  currentFormula.inputs.forEach((input, i) => {
    const div = document.createElement("div");
    // div.className = ''
    div.innerHTML = `
    <label>${input.label} (${input.unit}):</label>
    <input type="number" id="input-${i}">
    `
    inputsContainer.append(div)
  });
  
  calculateBtn.innerHTML = `<button id="calculate" onclick="calculate(${index})">Calculate</button>`
  modalContent.append(calculateBtn)

  modal.style.display = 'block';
};

window.onclick = (event) => {
  const modal = document.getElementById("calculation-modal");
  if (event.target === modal) {
    modal.style.display = 'none';
  };
};

function calculate(index) {
  currentFormula = formulas[index];
  const inputs = [];
  const result = []; 
  
  const modalContent = document.getElementById("modal-content")

  for (let i = 0; i < currentFormula.inputs.length; i++) {
    const value = parseFloat(document.getElementById(`input-${i}`).value);
    if (isNaN(value)) {
      alert("Please enter a valid number!");
      return;
    };
    inputs.push(value)
  };

  currentFormula.formulas_list.forEach((formula) => {
    const div = document.createElement("div");
    div.id = "answer"
    console.log(document.getElementById("answer").)

    if (formula.label in result === false) {      
      div.innerHTML = `
        ${formula.label}: ${formula.formula(inputs).toFixed(2)} ${currentFormula.inputs[0].unit}
      `

      result.push(formula.label)
      modalContent.append(div)
    } else {
      div.textContent = `${formula.label}: ${formula.formula(inputs).toFixed(2)} ${currentFormula.inputs[0].unit}`
    }
  });
  // const result = currentFormula.formula(inputs);
  // document.getElementById('answer').textContent = `Result: ${result.toFixed(2)} ${currentFormula.inputs[0].unit}`
};