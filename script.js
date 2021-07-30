function rolandoDados() {
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

function doisDados() {
  let dado1 = rolandoDados();
  let dado2 = rolandoDados();

  return dado1 + dado2;
}

console.log(doisDados());

let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 1000; i++) {
  let resultado = doisDados();

  count[resultado] = count[resultado] + 1;
}

let textoResultado = document.getElementById("textoResultado");

for (let i = 2; i < 13; i++) {
  textoResultado.innerText += `${i}: ${count[i]}\n `;
}

let graficoResultado = document.getElementsByClassName("graficoResultado");
for (let i = 2; i < 13; i++) {
  let id = `dado${i}`;
  let div = document.getElementById(id);
  div.innerText = count[i];
  div.style.width = `${count[i]}px`;
}
