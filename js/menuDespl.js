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

class autor { constructor(apellido, nombre) { this.apellido = apellido; this.nombre = nombre } };
class obra { constructor(fichero, nombre, autor) { this.fichero = fichero; this.nombre = nombre; this.autor = autor } };
var autor0 = new autor("Whalen", "Tom");
var autor1 = new autor("Redfern", "Tom");
var autor2 = new autor("Usik", "Maxim");
var ruta = "img/"
var obra0 = new obra(ruta + "whalen-tom-monster80s.jpg", "Monster 80's", autor0);
var obra1 = new obra(ruta + "travel-tom-redfern.jpg", "Travel", autor1);
var obra2 = new obra(ruta + "usik-maxim-the-girl-in-jungles.jpg", "The girl in jungle", autor2);
var obra3 = new obra(ruta + "redfern-tom-BIG+BANG-4.jpg", "Big Bang", autor1);
var obra4 = new obra(ruta + "redfern-tom-social3.jpg", "Social Travel", autor1);
var obra5 = new obra(ruta + "usik-maxim-climate-change-tebatti-43-2017.jpg", "Climate Change", autor2);
var obra6 = new obra(ruta + "usik-maxim-healthy-food.jpg", "Healthy Food", autor2);
var obra7 = new obra(ruta + "whalen-tom-gothambygaslight.jpg", "Gotham By Gaslight", autor0);
var obra8 = new obra(ruta + "whalen-tom-heartwork_2014.jpg", "Heartwork 2014", autor0);
var obra9 = new obra(ruta + "usik-maxim-apartment-rent.jpg", "Apartment Rent", autor2);
var obras = [obra0, obra1, obra2, obra3, obra4, obra5, obra6, obra7, obra8, obra9];

var izq = 0;
var cen = 1;
var dch = 2;

function masImg() {
    izq = izq + 3;
    cen = cen + 3;
    dch = dch + 3;
    if (izq >= obras.length) { izq = izq - obras.length };
    if (cen >= obras.length) { cen = cen - obras.length };
    if (dch >= obras.length) { dch = dch - obras.length };
    selImg();
};

function menosImg() {
    izq = izq - 3;
    cen = cen - 3;
    dch = dch - 3;
    if (izq < 0) { izq = izq + obras.length };
    if (cen < 0) { cen = cen + obras.length };
    if (dch < 0) { dch = dch + obras.length };
    selImg()
};


function selImg() {
    document.getElementById("obraIzq").src = obras[izq].fichero;
    document.getElementById("obraNombreIzq").innerHTML = obras[izq].nombre;
    document.getElementById("autorIzq").innerHTML = obras[izq].autor.apellido + " " + obras[izq].autor.nombre;
    document.getElementById("obraCen").src = obras[cen].fichero;
    document.getElementById("obraNombreCen").innerHTML = obras[cen].nombre;
    document.getElementById("autorCen").innerHTML = obras[cen].autor.apellido + " " + obras[cen].autor.nombre;
    document.getElementById("obraDch").src = obras[dch].fichero;
    document.getElementById("obraNombreDch").innerHTML = obras[dch].nombre;
    document.getElementById("autorDch").innerHTML = obras[dch].autor.apellido + " " + obras[dch].autor.nombre;
    altImg()
}

function altImg() {
    let lugares = ["Izq", "Cen", "Dch"];
    let altura = document.getElementById("obra" + lugares[0]).naturalHeight;
    //let altura = 1500
    for (lu in lugares) {
        if (document.getElementById("obra" + lugares[lu]).naturalHeight < altura) { altura = document.getElementById("obra" + lugares[lu]).naturalHeight }
    };
    for (lu in lugares) { document.getElementById("obra" + lugares[lu]).height = altura };
    //document.getElementsById("menosImg").style.height = altura
};