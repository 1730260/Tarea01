function ejercicio9(){
    let distKM = 3;
    let tarifaB = 10, km = 3;
    let total = distKM * km + tarifaB;
    alert("Recorriste " + distKM + " km y su total a pagar es: " + total);
}

let cambios = 0;
function cambiando_caja() {
    switch (cambios) {
        case 0:
            document.getElementById("caja").src = "../Images/caja cerrada.png";
        case 1:
            document.getElementById("caja").src = "../Images/caja casi cerrada";
            break;
        case 2:
            document.getElementById("caja").src = "../Images/caja poco abierta.png";
            break;
        case 3:
            document.getElementById("caja").src = "../Images/caja abierta.png";
            break;
        case 4:
            document.getElementById("caja").src = "../Images/caja mas abierta.png";
            break;
}
function abriendo_caja() {
    if (cambios < 4) {
        alert("me encontraste!");
        cambios++;
        cambiando_caja();
    } else {
        alert("Que intentas, Romperme???");
    }
}
function cerrando_caja() {
    if (cambios > 0) {
        alert("o no te equivocaste");
        cambios--;
        cambiando_caja();
    } else {
        alert("Ya estoy cerradooo!!!");
    }
}
function cambio1() {
    alert("CAMBIOOOO!!!!");
    document.getElementById("cambioTexto1").textContent = "¡Insecto insignificante!";
    document.getElementById("capGinyu").src="../Images/capGinyu_cambio.gif";
}
function cambio2() {
    alert("CAMBIOOOO!!!!");
    document.getElementById("cambioTexto2").textContent = "¡Ni siquiera mereces que use todo mi poder!";
    document.getElementById("capGinyu").src="../Images/capGinyu_cambio.gif";
}
function cambio3() {
    alert("CAMBIOOOO!!!!");
    document.getElementById("cambioTexto3").textContent = "¡Patético!";
    document.getElementById("capGinyu").src="../Images/capGinyu_cambio.gif";
}

function rana() {
    alert("¿Una rana?");
    document.querySelector(".rana").textContent = "Croac!";
    document.getElementById("capGinyu").src = "../Images/ginyu_rana.jpg";
}