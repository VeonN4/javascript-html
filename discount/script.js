const addItemBtn = document.getElementById('add-item');
const calculateBtn = document.getElementById('calculate-btn');

const totalPrice = document.getElementById('totalPrice');
const discountPrice = document.getElementById('discountPrice');
const minimalDiscount = document.getElementById('minimalDiscount');
const discountValue = document.getElementById('discountValue');

let minimalDiscountPrice = 1000000
let discount = 50
let discountCost = 0
let totalCost = 0
let cost = 0

let format = new Intl.NumberFormat('id-ID', {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0
})

function addItem() {
  const itemCount = document.querySelectorAll('input[id^="item"]').length;  
  const itemList = document.getElementById("item-list");

  const itemDiv = document.createElement("div");
  itemDiv.setAttribute("class", "item");

  const itemLabel = document.createElement("label");
  itemLabel.innerText =  `Item ${itemCount}`;
  itemLabel.id = `item-${itemCount}`;

  const itemValue = document.createElement("input");
  itemValue.setAttribute("type", "number");
  itemValue.setAttribute("name", `item-${itemCount}`);
  itemValue.setAttribute("id", `item-${itemCount}`);
  itemValue.min = "0";
  itemValue.value = "0";

  itemList.append(itemDiv);
  
  itemDiv.append(itemLabel);
  itemDiv.append(itemValue);
};

function calculateItem() {
  const itemCount = document.querySelectorAll('input[id^="item"]');

  itemCount.forEach((index) =>{
    cost += parseInt(index.value);
  });  

  if (!(cost <= minimalDiscountPrice)) {
    discountCost = cost - ((discount/100) * cost)
  };

  displayPrice()
};

function displayPrice() {
  totalPrice.innerText = `Total Harga: ${format.format(cost)}`
  discountPrice.innerText = `Harga Diskon: ${format.format(discountCost)}`
  minimalDiscount.innerText = `Minimal Harga untuk Diskon: ${format.format(minimalDiscountPrice)}`
  discountValue.innerText = `Discount: ${discount}%`
};

displayPrice()
