function somar() {
  var num1 = parseFloat(document.getElementById("valor01").value);
  var num2 = parseFloat(document.getElementById("valor02").value);
  var resultado = num1 + num2;
  exibirResultado(resultado, "SOMA", num1, num2);
}

function subtrair() {
  var num1 = parseFloat(document.getElementById("valor01").value);
  var num2 = parseFloat(document.getElementById("valor02").value);
  var resultado = num1 - num2;
  exibirResultado(resultado, "SUBTRAÇÃO", num1, num2);
}

function multiplicar() {
  var num1 = parseFloat(document.getElementById("valor01").value);
  var num2 = parseFloat(document.getElementById("valor02").value);
  var resultado = num1 * num2;
  exibirResultado(resultado, "MULTIPLICAÇÃO", num1, num2);
}

function dividir() {
  var num1 = parseFloat(document.getElementById("valor01").value);
  var num2 = parseFloat(document.getElementById("valor02").value);
  if (num2 === 0) {
      alert("Não é possível dividir por zero.");
      return;
  }
  var resultado = num1 / num2;
  exibirResultado(resultado, "DIVISÃO", num1, num2);
}

function porcentagem() {
  var num = parseFloat(document.getElementById("valor01").value);
  var percent = parseFloat(document.getElementById("valor02").value);
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
          <li>Operação: <span>${operacao}</span></li>
          <li>Valor 01 digitado pelo usuário: <span>${valor1}</span></li>
          <li>Valor 02 digitado pelo usuário: <span>${valor2}</span></li>
          <li>O resultado da operação é ${valor1} + ${valor2} = <span>${resultado}</span></li>
      </ul>`;
  resultadoElement.style.display = "flex";
}

function ocultarResultado() {
  document.getElementById("resultado").style.display = "none";
}