function somar() {
  var num1 = parseFloat(prompt("Digite o primeiro número:"));
  var num2 = parseFloat(prompt("Digite o segundo número:"));
  var resultado = num1 + num2;
  exibirResultado(resultado, "SOMA", num1, num2);
}

function subtrair() {
  var num1 = parseFloat(prompt("Digite o primeiro número:"));
  var num2 = parseFloat(prompt("Digite o segundo número:"));
  var resultado = num1 - num2;
  exibirResultado(resultado, "SUBTRAÇÃO", num1, num2);
}

function multiplicar() {
  var num1 = parseFloat(prompt("Digite o primeiro número:"));
  var num2 = parseFloat(prompt("Digite o segundo número:"));
  var resultado = num1 * num2;
  exibirResultado(resultado, "MULTIPLICAÇÃO", num1, num2);
}

function dividir() {
  var num1 = parseFloat(prompt("Digite o primeiro número:"));
  var num2 = parseFloat(prompt("Digite o segundo número:"));
  if (num2 === 0) {
      alert("Não é possível dividir por zero.");
      return;
  }
  var resultado = num1 / num2;
  exibirResultado(resultado, "DIVISÃO", num1, num2);
}

function porcentagem() {
  var num = parseFloat(prompt("Digite o número:"));
  var percent = parseFloat(prompt("Digite a porcentagem a ser calculada:"));
  var resultado = (num * percent) / 100;
  exibirResultado(resultado, "PORCENTAGEM", num, percent);
}

function limpar() {
  document.getElementById("resultado").innerHTML = "";
  ocultarResultado();
}

function exibirResultado(resultado, operacao, valor1, valor2) {
  var resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = `
      <h2>Memória de Cálculo</h2>
      <ul>
          <li>Operação: ${operacao}</li>
          <li>Valor 01: ${valor1}</li>
          <li>Valor 02: ${valor2}</li>
          <li>O resultado é: ${resultado}</li>
      </ul>`;
  resultadoElement.style.display = "flex";
}

function ocultarResultado() {
  document.getElementById("resultado").style.display = "none";
}