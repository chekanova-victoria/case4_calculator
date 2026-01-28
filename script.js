const inputA = document.getElementById("a");
const inputB = document.getElementById("b");

const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");

const resultBox = document.getElementById("resultBox");

function readNumbers() {
  const a = Number(inputA.value);
  const b = Number(inputB.value);

  if (isNaN(a) || isNaN(b)) {
    resultBox.textContent = "Ошибка: введите числа";
    return null;
  }
  return { a, b };
}

btnSum.addEventListener("click", () => {
  const data = readNumbers();
  if (!data) return;
  resultBox.textContent = data.a + data.b;
});

btnSub.addEventListener("click", () => {
  const data = readNumbers();
  if (!data) return;
  resultBox.textContent = data.a - data.b;
});

btnMul.addEventListener("click", () => {
  const data = readNumbers();
  if (!data) return;
  resultBox.textContent = data.a * data.b;
});

btnDiv.addEventListener("click", () => {
  const data = readNumbers();
  if (!data) return;

  if (data.b === 0) {
    resultBox.textContent = "Ошибка: деление на 0";
    return;
  }
  resultBox.textContent = data.a / data.b;
});