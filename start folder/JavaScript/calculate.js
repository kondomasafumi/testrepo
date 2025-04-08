const vol1Input = document.getElementById("num1");
const vol2Input = document.getElementById("num2");
const operatorSlect = document.getElementById("choice");
const formulaArea = document.getElementById("formula");
const resultArea = document.getElementById("result");

console.log(vol1Input);
console.log(vol2Input);
console.log(operatorSlect);
console.log(formulaArea);
console.log(resultArea);

vol1Input.addEventListener("input", calculate);
vol2Input.addEventListener("input", calculate);
operatorSlect.addEventListener("change", calculate);

function calculate() {
  const vol1 = parseFloat(vol1Input.value);
  const vol2 = parseFloat(vol2Input.value);
  const operator = operatorSlect.value;

  if (isNaN(vol1) || isNaN(vol2)) {
    formulaArea.textContent = "計算式";
    resultArea.textContent = "両方の数値を入力してください。";
    return;
  }

  let result;
  let formulaText = "";

  if (operator === "additon") {
    result = vol1 + vol2;
    formulaText = `${vol1} ＋ ${vol2} =`;
  } else if (operator === "subtraction") {
    result = vol1 - vol2;
    formulaText = `${vol1} － ${vol2} =`;
  } else if (operator === "multiplication") {
    result = vol1 * vol2;
    formulaText = `${vol1} × ${vol2} =`;
  } else if (operator === "division") {
    if (vol2 !== 0) {
      result = vol1 / vol2;
      formulaText = `${vol1} ÷ ${vol2} =`;
    } else {
      result = "０では割れません";
      formulaText = `${vol1} ÷ ${vol2} =`;
    }
  } else {
    result = "不明な演算子";
    formulaText = "不明な演算子"; // または適切なエラーメッセージ
  }

  formulaArea.textContent = formulaText;
  resultArea.textContent = `結果: ${result}`;
}
