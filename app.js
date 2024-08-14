// Diccionarios para encriptación y desencriptación
const diccionarioEncriptacion = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const diccionarioDesencriptacion = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

// Función para validar el texto
function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

// Función para encriptar el texto usando diccionario
function encriptar() {
    let texto = document.getElementById("inputText").value;

    if (!validarTexto(texto)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos, caracteres especiales o emojis.");
        return;
    }

    for (let letra in diccionarioEncriptacion) {
        let palabraEncriptada = diccionarioEncriptacion[letra];
        texto = texto.replace(new RegExp(letra, 'g'), palabraEncriptada);
    }
    var contMensaje = document.querySelector(".cont-mensaje");

    contMensaje.style.display = "block";
    document.getElementById("resultadoTexto").value = texto;
}

// Función para desencriptar el texto usando diccionario
function desencriptar() {
    let texto = document.getElementById("inputText").value;

    if (!validarTexto(texto)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos, caracteres especiales o emojis.");
        return;
    }

    for (let palabra in diccionarioDesencriptacion) {
        let letraOriginal = diccionarioDesencriptacion[palabra];
        texto = texto.replace(new RegExp(palabra, 'g'), letraOriginal);
    }

    document.getElementById("resultadoTexto").value = texto;
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    let textoResultado = document.getElementById("resultadoTexto");
    textoResultado.select();
    textoResultado.setSelectionRange(0, 99999); // Para móviles

    document.execCommand("copy");
    alert("Texto copiado al portapapeles!");
}

function verificarContenido() {
    var textarea = document.getElementById("resultadoTexto");
    var contMensaje = document.querySelector(".cont-mensaje");

    if (textarea.value.trim() === "") {
        contMensaje.style.display = "block";
    } else {
        contMensaje.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var textarea = document.getElementById("resultadoTexto");
    var textareaIn = document.getElementById("inputText");
    var contMensaje = document.querySelector(".cont-mensaje");

    textarea.value = "";
    textareaIn.value = "";
    
    contMensaje.style.display = "none";

    textarea.addEventListener("input", verificarContenido());
});