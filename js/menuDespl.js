function aMenuBlanco() {
    document.getElementById("menuDesp").src = "img/menuBlanco.png";
}
function aMenu() {
    document.getElementById("menuDesp").src = "img/menu.png";
}
function ponQuitaMenu() {
    if (document.getElementById("desplegable").style.display == "block") { quitaMenu() }
    else { ponMenu() }
}
function ponMenu() { document.getElementById("desplegable").style.display = "block" }
function quitaMenu() { document.getElementById("desplegable").style.display = "none" }
function altImg() {
    var numImg = document.images.length;
    var altura = document.images[1].naturalHeight;
    //El contador empieza en 1 porque hay una imagen en el header//
    for (i = 1; i < numImg; i++) {
        if (document.images[i].naturalHeight < altura) { altura = document.images[i].naturalHeight }
    };
    for (i = 1; i < numImg; i++) { document.images[i].height = altura };
}