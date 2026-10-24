function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

const btnAdd = document.getElementById('btn-add');
if (btnAdd) {
  btnAdd.addEventListener('click', () => {
    const a = Number(document.getElementById('a').value);
    const b = Number(document.getElementById('b').value);
    document.getElementById('result').textContent = add(a, b);
  });
}
const btnSubtract = document.getElementById('btn-subtract');
if (btnSubtract) {
  btnSubtract.addEventListener('click', () => {
    const rawA = document.getElementById('a').value;
    const rawB = document.getElementById('b').value;


  if (rawA === "" || rawB === "") {
    document.getElementById('result').textContent = "Error"; 
    return; 
  }

  const a = Number(rawA);
  const b = Number(rawB);
  document.getElementById('result').textContent = subtract(a, b);
});

const btnMultiply = document.getElementById('btn-multiply');
if (btnMultiply) {
  btnMultiply.addEventListener('click', () => {
    const a = Number(document.getElementById('a').value);
    const b = Number(document.getElementById('b').value);
    document.getElementById('result').textContent = multiply(a, b);
  });
}}