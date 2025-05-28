const formulas = [
  {
    title: "Kubus",
    description: "Calculator untuk menghitung bangun geometri kubus",
    inputs: [
      { label: "Sisi", unit: "cm2" }
    ],
    formulas_list: [
      { label: "Volume (V)", formula: (inputs) => inputs[0] * inputs[0] * inputs[0] },
      { label: "Luas Permukaan", formula: (inputs) => 6 * inputs[0] * inputs[0] }
    ],
    
  },
  {
    title: "Balok",
    description: "Calculator untuk menghitung bangun geometri Balok",
    inputs: [
      { label: "Panjang", unit: "cm2" },
      { label: "Lebar", unit: "cm2" },
      { label: "Tinggi", unit: "cm2" }
    ],
    formulas_list: [
      { label: "Volume (V)", formula: (inputs) => inputs[0] * inputs[1] * inputs[2] },
      { label: "Luas Permukaan", formula: (inputs) => 2 * (inputs[0] * inputs[1] +  inputs[0] * inputs[2] + inputs[1] * inputs[2]) }
    ],
    
  },
  {
    title: "Prisma",
    description: "Calculator untuk menghitung bangun geometri Prisma",
    inputs: [
      { label: "Luas Alas", unit: "cm2" },
      { label: "Tinggi", unit: "cm2" }
    ],
    formulas_list: [
      { label: "Volume", formula: (inputs) => inputs[0] * inputs[1] },
    ],
  },
  {
    title: "Limas",
    description: "Calculator untuk menghitung bangun geometri Limas",
    inputs: [
      { label: "Luas Alas", unit: "cm2" },
      { label: "Tinggi", unit: "cm2" }
    ],
    formulas_list: [
      { label: "Volume (V)", formula: (inputs) => 1/3 * inputs[0] * inputs[1] },
    ],
  },
  {
    title: "Tabung",
    description: "Calculator untuk menghitung bangun geometri Tabung", 
    inputs: [
      { label: "Luas Alas", unit: "cm2" },
      { label: "Tinggi", unit: "cm2" }
    ],
    formulas_list: [
      { label: "Volume (V)", formula: (inputs) => 3.14 * inputs[0] * inputs[0] * inputs[1] },
    ],
  },
  {
    title: "Kerucut",
    description: "Calculator untuk menghitung bangun geometri Kerucut",
    inputs: [
      { label: "Luas Alas", unit: "cm2" },
      { label: "Tinggi", unit: "cm2" }
    ],
    formulas_list: [
      { label: "Volume (V)", formula: (inputs) => 1/3 * 3.14 * inputs[0] * inputs[0] * inputs[1] },
    ],
  },
  {
    title: "Bola",
    description: "Calculator untuk menghitung bangun geometri Bola",
    inputs: [
      { label: "Luas Alas", unit: "cm2" },
    ],
    formulas_list: [
      { label: "Volume (V)", formula: (inputs) => 4/3 * 3.14 * inputs[0] * inputs[0] * inputs[0] },
    ],
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

  const calculateBtn = document.createElement("div");
  
  const calculateDiv = document.getElementById("calculate-div")
  calculateDiv.innerHTML = ''
  
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
  calculateDiv.append(calculateBtn)

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
  
  const answerContent = document.getElementById("answer-div")
  answerContent.innerHTML = ''

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

    div.innerHTML = `
      ${formula.label}: ${formula.formula(inputs).toFixed(2)} ${currentFormula.inputs[0].unit}
    `
    answerContent.append(div)
  });
};
