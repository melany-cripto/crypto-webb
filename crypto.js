function cesar(texto, desplazamiento, modo) {
desplazamiento = parseInt(desplazamiento);
if (modo === "descifrar") desplazamiento = -desplazamiento;


return texto.toUpperCase().replace(/[A-Z]/g, c =>
String.fromCharCode((c.charCodeAt(0) - 65 + desplazamiento + 26) % 26 + 65)
);
}


function vigenere(texto, clave, modo) {
texto = texto.toUpperCase();
clave = clave.toUpperCase();
let res = "";
let j = 0;


for (let i = 0; i < texto.length; i++) {
if (texto[i] < 'A' || texto[i] > 'Z') continue;
let t = texto.charCodeAt(i) - 65;
let k = clave.charCodeAt(j % clave.length) - 65;
let v = modo === "cifrar" ? (t + k) % 26 : (t - k + 26) % 26;
res += String.fromCharCode(v + 65);
j++;
}
return res;
}


function atbash(texto) {
return texto.toUpperCase().replace(/[A-Z]/g, c =>
String.fromCharCode(90 - (c.charCodeAt(0) - 65))
);
}
