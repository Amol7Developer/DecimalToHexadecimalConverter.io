const decimalNumberInput = document.getElementById("decimal-number");
const convertBtn = document.getElementById("convert-btn");
const resultDiv = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  const decimalNumber = Number(decimalNumberInput.value);
  if (!isNaN(decimalNumber)) {
    const hexadecimalNumber = decimalNumber.toString(16);
    resultDiv.textContent = `The hexadecimal equivalent of ${decimalNumber} is ${hexadecimalNumber.toUpperCase()}.`;
    resultDiv.style.display = "block";
  }
});
