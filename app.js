function somar() {
  const n1 = Number(document.getElementById('n1').value);
  const n2 = Number(document.getElementById('n2').value);
  const resultado = n1 + n2;
  document.getElementById('resultado-soma').textContent = 'Resultado: ' + resultado;
}

function calcularMedia() {
  const n1 = Number(document.getElementById('m1').value);
  const n2 = Number(document.getElementById('m2').value);
  const n3 = Number(document.getElementById('m3').value);
  const n4 = Number(document.getElementById('m4').value);

  const media = (n1 + n2 + n3 + n4) / 4;
  const status = media > 7 ? 'Aprovado' : 'Reprovado';

  document.getElementById('resultado-media').textContent = 'Média: ' + media + ' - Status: ' + status;
}

function mostrarTabuada() {
  const numero = Number(document.getElementById('tabuada').value);
  const div = document.getElementById('resultado-tabuada');
  div.innerHTML = '';

  for (let i = 0; i <= 10; i++) {
    const linha = document.createElement('p');
    linha.textContent = `${numero} x ${i} = ${numero * i}`;
    div.appendChild(linha);
  }
}

function compararValores() {
  const valor1 = Number(document.getElementById('valor1').value);
  const valor2 = Number(document.getElementById('valor2').value);

  if (valor1 > valor2) {
    document.getElementById('resultado-comparacao').textContent = 'Maior: ' + valor1;
  } else if (valor2 > valor1) {
    document.getElementById('resultado-comparacao').textContent = 'Maior: ' + valor2;
  } else {
    document.getElementById('resultado-comparacao').textContent = 'Os valores são iguais';
  }
}

function mostrarImpares() {
  const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const impares = vetor.filter(numero => numero % 2 !== 0);
  const div = document.getElementById('resultado-impares');

  div.innerHTML = '';

  impares.forEach(numero => {
    const p = document.createElement('p');
    p.textContent = numero;
    div.appendChild(p);
  });
}

function inverterNome() {
  const nome = document.getElementById('nome').value;
  const nomeInvertido = nome.split('').reverse().join('');
  document.getElementById('resultado-nome').textContent = 'Resultado: ' + nomeInvertido;
}

