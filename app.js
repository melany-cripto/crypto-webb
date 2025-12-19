function cifrar() {
ejecutar("cifrar");
}


function descifrar() {
ejecutar("descifrar");
}


function ejecutar(modo) {
const alg = document.getElementById("algoritmo").value;
const texto = document.getElementById("texto").value;
const clave = document.getElementById("clave").value;
let resultado = "";


if (alg === "cesar") resultado = cesar(texto, clave, modo);
if (alg === "vigenere") resultado = vigenere(texto, clave, modo);
if (alg === "atbash") resultado = atbash(texto);


document.getElementById("resultado").value = resultado;
}
