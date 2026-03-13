function clearDisplay() {
document.getElementById('display').value = '';
}

function appendToDisplay(value) {
document.getElementById('display').value += value;
}

function calculateResult() {
const display = document.getElementById('display');

try {
eval(display.value);
display.value = "❤ i miss u:c ❤";
} catch {
display.value = "Error";
}
}
