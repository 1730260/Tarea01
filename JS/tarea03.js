function ejercicio9(){
    let distKM = 3;
    let tarifaB = 10, km = 3;
    let total = distKM * km + tarifaB;
    alert("Recorriste " + distKM + " km y su total a pagar es: " + total);
}

let cambios = 0;
function abriendo_caja() {
    if (cambios < 5) {
        alert("me encontraste!");
        cambios++;
    } else {
        alert("Que intentas, Romperme???");
    }
}
function cerrando_caja() {
    if (cambios > 0) {
        alert("o no te equivocaste");cambios--;
        cambios--;
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
    document.querySelector(".rana").textContent = "Croac!"
    document.getElementById("capGinyu").src = "../Images/ginyu_rana.jpg";
}