function encriptar() {

    var textToEncrypt = document.getElementById("textToEncrypt").value
    if (textToEncrypt != "") {

        const valores = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]]

        valores.forEach(elem => {
            textToEncrypt = textToEncrypt.replaceAll(elem[1], elem[0])
        })

        document.getElementById("textEncrypted").innerHTML = textToEncrypt
        document.getElementById("textToEncrypt").value = ""
        ocultar()
    } else {
        alert("Primero debe escribir el texto a encriptar")
    }
}

function desencriptar() {

    var textToDecript = document.getElementById("textToEncrypt").value
    if (textToDecript != "") {

        const valores = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]]

        valores.forEach(elem => {
            textToDecript = textToDecript.replaceAll(elem[0], elem[1])
        })

        document.getElementById("textEncrypted").innerHTML = textToDecript
        document.getElementById("textToEncrypt").value = ""
        ocultar()
    } else {
        alert("Primero debe escribir el texto a desencriptar")
    }

}

function copiar() {

    const TextEncrypted = document.getElementById("textEncrypted").value
    document.getElementById("textToEncrypt").value = TextEncrypted
    document.getElementById("textEncrypted").innerHTML = ""
    document.getElementById("btn-copy").style.visibility = "hidden"
}

function ocultar() {

    //Quitamos el texto de ayuda
    document.getElementById("textNotify1").style.visibility = "hidden"
    document.getElementById("textNotify2").style.visibility = "hidden"
    document.getElementById("btn-copy").style.visibility = "visible"

    //Quitamos la imagen de fondo
    document.getElementById("textEncrypted").style.backgroundImage = "none";
}