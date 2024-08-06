document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.botao1').addEventListener('click', criptografar);
    document.querySelector('.botao2').addEventListener('click', descriptografar);
});

function criptografar() {
    let texto = document.getElementById("userText").value;
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Por favor, digite apenas letras minúsculas sem acentos ou caracteres especiais.");
        return;
    }
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    exibirResultado(textoCriptografado);
}

function descriptografar() {
    let texto = document.getElementById("userText").value;
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Por favor, digite apenas letras minúsculas sem acentos ou caracteres especiais.");
        return;
    }
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    exibirResultado(textoDescriptografado);
}

function exibirResultado(resultadoTexto) {
    let resultContainer = document.getElementById("resultContainer");
    let resultadoArea = document.getElementById("resultado");
    let imagemContainer = resultContainer.querySelector('.conteudo_imagem');
    let textoContainer = resultContainer.querySelector('.conteudo_texto');
    let botaoCopiar = document.getElementById("botaoCopiar");

    imagemContainer.style.display = 'none';
    textoContainer.style.display = 'none';
    resultadoArea.style.display = 'block';
    botaoCopiar.style.display = 'block';
    resultadoArea.innerText = resultadoTexto; 
}

function copiarParaAreaDeTransferencia() {
    let resultado = document.getElementById("resultado");
    let tempTextarea = document.createElement("textarea");
    tempTextarea.value = resultado.innerText;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Texto copiado para a área de transferência!");
}