function ejercicio9(){
    let distKM = prompt("Escriba los km recorridos: ");
    let tarifaB = 10, km = 3;
    let total = distKM * km + tarifaB;
    alert("Recorriste " + distKM + " km y su total a pagar es: " + total);
}

let cambios = 0;
function cambiando_caja() {
    switch (cambios) {
        case 0:
            document.getElementById("caja").src = "../Images/caja cerrada.png";
            break;
        case 1:
            document.getElementById("caja").src = "../Images/caja casi cerrada.png";
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
    document.getElementById("dialogo").textContent = "CAMBIO!!!";
}
function cambio2() {
    alert("CAMBIOOOO!!!!");
    document.getElementById("cambioTexto2").textContent = "¡Ni siquiera mereces que use todo mi poder!";
    document.getElementById("capGinyu").src="../Images/capGinyu_cambio.gif";
    document.getElementById("dialogo").textContent = "CAMBIO!!!";
}
function cambio3() {
    alert("CAMBIOOOO!!!!");
    document.getElementById("cambioTexto3").textContent = "¡Patético!";
    document.getElementById("capGinyu").src="../Images/capGinyu_cambio.gif";
    document.getElementById("dialogo").textContent = "CAMBIO!!!";
}

function rana() {
    alert("¿Una rana?");
    document.getElementById("capGinyu").src = "../Images/ginyu_rana.jpg";
    document.getElementById("dialogo").textContent = "Croac! Croac! ....";
}

document.addEventListener("DOMContentLoaded", function(){

    // Ejercicio 1 - Compra
    document.getElementById("formCompra").addEventListener("submit", function(e){
        e.preventDefault();

        let p1 = parseFloat(document.getElementById("precio1").value);
        let c1 = parseFloat(document.getElementById("cant1").value);
        let p2 = parseFloat(document.getElementById("precio2").value);
        let c2 = parseFloat(document.getElementById("cant2").value);
        let p3 = parseFloat(document.getElementById("precio3").value);
        let c3 = parseFloat(document.getElementById("cant3").value);
        let salida = document.getElementById("totalCompra");

        if(isNaN(p1) || isNaN(c1) || isNaN(p2) || isNaN(c2) || isNaN(p3) || isNaN(c3)){
            alert("Completa todos los campos con números válidos");
            salida.textContent = "Error: faltan datos";
            return;
        }

        let total = (p1*c1) + (p2*c2) + (p3*c3);
        if(total > 100) total *= 0.95; // descuento 5%

        salida.textContent = "Total a pagar: $" + total.toFixed(2);
    });

    // Ejercicio 2 - División de cuenta
    document.getElementById("formCuenta").addEventListener("submit", function(e){
        e.preventDefault();

        let cuenta = parseFloat(document.getElementById("cuentaTotal").value);
        let personas = parseInt(document.getElementById("personas").value);
        let salida = document.getElementById("divisionCuenta");

        if(isNaN(cuenta) || isNaN(personas) || personas <= 0){
            alert("Ingresa valores válidos");
            salida.textContent = "Error: datos incorrectos";
            return;
        }

        let pago = cuenta / personas;
        salida.textContent = "Cada persona paga: $" + pago.toFixed(2);
    });

    // Ejercicio 3 - Conversión de divisas
    document.getElementById("formDivisas").addEventListener("submit", function(e){
        e.preventDefault();

        let usd = parseFloat(document.getElementById("dolares").value);
        let tasa = parseFloat(document.getElementById("tasa").value);
        let salida = document.getElementById("conversion");

        if(isNaN(usd) || isNaN(tasa) || tasa <= 0){
            alert("Ingresa valores válidos");
            salida.textContent = "Error: datos incorrectos";
            return;
        }

        let equivalente = usd * tasa;
        salida.textContent = "Equivalente en moneda local: S/." + equivalente.toFixed(2);
    });

});

// Validacion para mi formulario
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("formSenati").addEventListener("submit", function(e){
        e.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let dni = document.getElementById("dni").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let curso = document.getElementById("curso").value;
        let salida = document.getElementById("respuestaSenati");

        if(nombre === "" || dni === "" || correo === "" || telefono === "" || curso === ""){
            alert("Por favor completa todos los campos");
            salida.textContent = "Error: faltan datos";
            return;
        }

        // Validación básica de correo
        if(!correo.includes("@") || !correo.includes(".")){
            alert("Ingresa un correo válido");
            salida.textContent = "Error: correo inválido";
            return;
        }

        salida.textContent = "¡Gracias, " + nombre + "! Tu inscripción al curso de " + curso + " fue registrada correctamente.";
    });
});