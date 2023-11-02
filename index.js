function display(value) {
  document.getElementById("result").value += value;
}
function block() {
  var first = document.getElementById("result").value;
  var final = eval(first);
  document.getElementById("result").value = final;
}
function clearScreen() {
  document.getElementById("result").value = "";
}

function clearScreenN() {
  var currentInput = document.getElementById("result").value;
  if (currentInput.length > 0) {
    document.getElementById("result").value = currentInput.slice(0, -1);
  }
}
