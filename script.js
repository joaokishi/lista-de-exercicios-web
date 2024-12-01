// Exercício 1: Soma de Divisores
function somaDivisores() {
    let x = parseInt(prompt("Digite um número inteiro:"));
    let soma = 0;
    for (let i = 1; i < x; i++) {
        if (x % i === 0) soma += i;
    }
    document.getElementById('output1').innerText = `Soma dos divisores: ${soma}`;
}

// Exercício 2: Distância Euclidiana
function calculaDistancia() {
    let x1 = parseFloat(prompt("Digite x1:"));
    let y1 = parseFloat(prompt("Digite y1:"));
    let x2 = parseFloat(prompt("Digite x2:"));
    let y2 = parseFloat(prompt("Digite y2:"));
    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    document.getElementById('output2').innerText = `Distância: ${distancia.toFixed(2)}`;
}

// Exercício 3: Contagem de Palavras
function contaPalavras() {
    let frase = prompt("Digite uma frase:");
    let palavras = frase
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s\-]/g, '')
        .split(/\s+/);
    let contagem = {};
    palavras.forEach(palavra => {
        if (palavra) {
            contagem[palavra] = (contagem[palavra] || 0) + 1;
        }
    });
    let resultado = "Contagem de palavras:\n";
    for (let [palavra, quantidade] of Object.entries(contagem)) {
        resultado += `${palavra}: ${quantidade}\n`;
    }
    document.getElementById('output3').innerText = resultado;
}

function dimensaoMatriz() {
    let entrada = prompt("Digite a matriz como uma string (linhas separadas por ';' e colunas por espaço):");
    let linhas = entrada.split(';');
    let numLinhas = linhas.length;
    let numColunas = linhas[0].trim().split(' ').length;
    document.getElementById('output4').innerText = `Essa é uma matriz de dimensão ${numLinhas} x ${numColunas}.`;
}

function fibonacciSequencia() {
    let n = parseInt(prompt("Digite um número inteiro positivo (N):"));
    let sequencia = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            sequencia.push(0);
        } else if (i === 1) {
            sequencia.push(1);
        } else {
            sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
        }
    }
    document.getElementById('output5').innerText = `Os primeiros ${n} números da sequência de Fibonacci são:\n${sequencia.join(', ')}`;
}