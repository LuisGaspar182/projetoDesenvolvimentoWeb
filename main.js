var i = document.getElementById("name");
var texto = document.getElementById("texto");
const hellotxt = document.getElementById("hello");
const a =
"https://canalsolar.com.br/wp-content/uploads/2021/11/UNIFEI-vai-receber-E-5-milhoes-para-construir-usina-de-hidrogenio.jpg";
const b =
"https://defatoonline.com.br/wp-content/uploads/2020/04/Unifei.jpg";
function addvalue() {
if (i.src == a) {
    i.src = b;
} else {
    i.src = a;
}
if (texto.textContent === "Situado em Itajuba-MG") {
    texto.textContent = "Situdo em Itabira-MG"
} else {
    texto.textContent = "Situado em Itajuba-MG"
}
}
