// 1. Seleção dos elementos do HTML
const titulo = document.getElementById('titulo');
const btnIncrementar = document.getElementById('btn-incrementar');
const btnZerar = document.getElementById('btn-zerar');

// 2. Criação da variável de estado
let contador = 0;

// 3. Funções para alterar o estado e a tela
function aumentarContador() {
    contador++;
    titulo.textContent = `Contador: ${contador}`;
}

function zerarContador() {
    contador = 0;
    titulo.textContent = `Contador: ${contador}`;
}

// 4. Ouvintes de eventos (Cliques nos botões)
btnIncrementar.addEventListener('click', aumentarContador);
btnZerar.addEventListener('click', zerarContador);
