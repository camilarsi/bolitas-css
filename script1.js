function prenderFoco(elemento) {
    elemento.classList.remove("apagado");
    elemento.classList.add("prendido");
}


function apagarFoco(elemento) {
    elemento.classList.remove("prendido");
    elemento.classList.add("apagado");
}

function conmutar(b) {
    let prendido = b.classList.contains("prendido");
    if (prendido == true) {
        apagarFoco(b);
    } else {
        prenderFoco(b);
    }

}

let bolitas = document.querySelectorAll(".bolita");

for (let index = 0; index < bolitas.length; index++) {
    const bolita = bolitas[index];
    bolita.addEventListener("mouseover", function () {
        conmutar(bolita);
    });
    console.log("Escuchando");
}

let especial = document.getElementById("especial");
especial.addEventListener("click", apagarTodas);

function apagarTodas() {
    for (let index = 0; index < bolitas.length; index++) {
        const element = bolitas[index];
        apagarFoco(element);

    }
}