function somar() {
  var num1 = parseFloat(prompt("Digite o primeiro número:"));
  var num2 = parseFloat(prompt("Digite o segundo número:"));
  var resultado = num1 + num2;
  exibirResultado(resultado);
}

function subtrair() {
  var num1 = parseFloat(prompt("Digite o primeiro número:"));
  var num2 = parseFloat(prompt("Digite o segundo número:"));
  var resultado = num1 - num2;
  exibirResultado(resultado);
}

function multiplicar() {
  var num1 = parseFloat(prompt("Digite o primeiro número:"));
  var num2 = parseFloat(prompt("Digite o segundo número:"));
  var resultado = num1 * num2;
  exibirResultado(resultado);
}

function dividir() {
  var num1 = parseFloat(prompt("Digite o primeiro número:"));
  var num2 = parseFloat(prompt("Digite o segundo número:"));
  if (num2 === 0) {
      alert("Não é possível dividir por zero.");
      return;
  }
  var resultado = num1 / num2;
  exibirResultado(resultado);
}

function porcentagem() {
  var num = parseFloat(prompt("Digite o número:"));
  var percent = parseFloat(prompt("Digite a porcentagem a ser calculada:"));
  var resultado = (num * percent) / 100;
  exibirResultado(resultado);
}

function limpar() {
  document.getElementById("resultado").innerHTML = "";
  ocultarResultado();
}

function exibirResultado(resultado) {
  var resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = "<h2>O resultado é:</h2><p>" + resultado + "</p>";
  resultadoElement.style.display = "flex";
}

function ocultarResultado() {
  document.getElementById("resultado").style.display = "none";
}