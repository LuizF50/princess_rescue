const NUMERO_MAGICO = 153;

function salvarPrincesa() {
    const tentativa = parseInt(document.getElementById('magicNumber').value);
    const resultado = document.getElementById('resultado');
    const animacao = document.getElementById('animacao');

    if (isNaN(tentativa) || tentativa <= 0) {
        resultado.innerHTML = "Por favor, insira um número válido maior que zero.";
        return;
    }

    const diferenca = Math.abs(NUMERO_MAGICO - tentativa);

    if (diferenca > 50) {
        resultado.innerHTML = "Estamos distantes do número mágico, a princesa precisa de ajuda. Depressa!";
    } else if (diferenca > 0) {
        resultado.innerHTML = "Você está prestes a encontrar o Número Mágico! Falta pouco.";
    } else {
        resultado.innerHTML = "Olha só! O Número Mágico é 153!!! O enigma foi desvendado, derrotamos o dragão e a princesa foi resgatada!";
        animarResgate();
    }
}

function animarResgate() {
    const animacao = document.getElementById('animacao');
    animacao.innerHTML = "🤴 → 🐉 → 👸";
    
    let posicao = 0;
    const intervalo = setInterval(() => {
        posicao += 10;
        animacao.style.marginLeft = posicao + "px";
        
        if (posicao >= 200) {
            clearInterval(intervalo);
            setTimeout(() => {
                animacao.innerHTML = "🤴👸 Viveram felizes para sempre!";
                animacao.style.marginLeft = "0";
            }, 1000);
        }
    }, 100);
}
