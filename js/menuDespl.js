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