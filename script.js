function normalizeText(text) {
    return text
        .toLowerCase() // Convierte todas las letras a minúsculas
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Elimina acentos
        .replace(/[^a-z\s]/g, ""); // Elimina caracteres especiales
}

function encrypt() {
    let inputText = document.getElementById('inputText').value;
    inputText = normalizeText(inputText); // Normaliza el texto
    document.getElementById('inputText').value = inputText; // Actualiza el input con el texto normalizado

    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    updateResult(encryptedText);
    document.getElementById('message').textContent = 'Texto encriptado exitosamente';
    document.getElementById('copyButton').style.display = 'inline-block'; // Muestra el botón de copiar
}

function decrypt() {
    let inputText = document.getElementById('inputText').value;
    inputText = normalizeText(inputText); // Normaliza el texto
    document.getElementById('inputText').value = inputText; // Actualiza el input con el texto normalizado

    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    updateResult(decryptedText);
    document.getElementById('message').textContent = 'Texto desencriptado exitosamente';
    document.getElementById('copyButton').style.display = 'inline-block'; // Muestra el botón de copiar
}

function updateResult(text) {
    const resultDiv = document.getElementById('result');
    const copyButton = document.getElementById('copyButton');
    
    if (text) {
        resultDiv.innerHTML = text;
        copyButton.style.display = 'inline-block'; // Muestra el botón cuando hay un resultado
    } else {
        resultDiv.innerHTML = `
            <div class="imagen_de_buscadora">
                <img src="buscadora.png" alt="Imagen de buscadora">
                <p>Ingresa el texto que quieres encriptar o desencriptar para obtener un resultado aquí</p>
            </div>`;
    }
}

function copyResult() {
    const resultDiv = document.getElementById('result');
    const text = resultDiv.textContent;
    navigator.clipboard.writeText(text); // Copia el texto sin mostrar una alerta
}

const textarea = document.getElementById('inputText');
const clearButton = document.getElementById('clearButton');

textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
    
    // Mostrar u ocultar el botón de limpiar según el contenido
    if (this.value.length > 0) {
        clearButton.style.display = 'inline-block'; // Muestra el botón cuando hay texto
    } else {
        clearButton.style.display = 'none'; // Oculta el botón cuando no hay texto
    }
});

function clearText() {
    textarea.value = '';
    textarea.style.height = 'auto'; // Reinicia la altura del textarea
    clearButton.style.display = 'none'; // Oculta el botón después de limpiar
}
