const formulas = [
  {
    title: "Test",
    description: "Lorem ipsum",
    inputs: [
      { label: "Input 1", unit: "m" }
    ],
    formula: (inputs) => inputs[0] * inputs[0]
  },
  {
    title: "Test",
    description: "Lorem ipsum",
    inputs: [
      { label: "Input 1", unit: "m" }
    ],
    formula: (inputs) => inputs[0] * inputs[0]
  },
  {
    title: "Test",
    description: "Lorem ipsum",
    inputs: [
      { label: "Input 1", unit: "m" }
    ],
    formula: (inputs) => inputs[0] * inputs[0]
  },
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
  document.getElementById('modal-title').textContent = currentFormula.title;

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

  modal.style.display = 'block';
};

window.onclick = (event) => {
  const modal = document.getElementById("calculation-modal");
  if (event.target === modal) {
    modal.style.display = 'none';
  };
};

function calculate() {
  const inputs = []; 
  for (let i = 0; i < currentFormula.inputs.length; i++) {
    const value = parseFloat(document.getElementById(`input-${i}`).value);
    if (isNaN(value)) {
      alert("Please enter a valid number!");
      return;
    };
    inputs.push(value)
  };

  const result = currentFormula.formula(inputs);
  document.getElementById('answer').textContent = `Result: ${result.toFixed(2)} ${currentFormula.inputs[0].unit}`
};