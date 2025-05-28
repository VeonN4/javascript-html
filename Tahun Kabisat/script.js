const tahun = document.getElementById('tahun').value;
console.log(tahun % 4)

function checkYear() {
  let tahun = document.getElementById('tahun').value;
  const answer = document.getElementById('answer');

  console.log(tahun % 400 === 0 && tahun % 100 === 0 && tahun % 4 === 0);
  

  if (tahun % 400 === 0 || tahun % 100 !== 0 && tahun % 4 === 0) {
    answer.textContent = `${tahun} adalah tahun kabisat`
  } else {
    answer.textContent = `${tahun} bukanlah tahun kabisat`
  }
}