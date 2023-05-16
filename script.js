function agregar(valor) {
    document.getElementById("resultado").value += valor;
}

function borrar() {
    document.getElementById("resultado").value = "";
}

function calcular() {
    var resultado = eval(document.getElementById("resultado").value);
    document.getElementById("resultado").value = resultado;
}