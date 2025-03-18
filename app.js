const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ListaAmigosUl = document.getElementById("listaAmigos");
const ResultadoUl = document.getElementById("resultado");

//Validar solo letras y espacios mientras se escribe
inputAmigo.addEventListener("input", function () {
    this.value = this.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
});

function agregarAmigo() {
    let nombre = inputAmigo.value.trim();
     if (nombre === "") {
        alert("Ingrese un nombre, por favor.");
        return;
    }

    listaAmigos.push(nombre);

    actualizarListaVisual();
    //Limpiar el campo después de agregar
    inputAmigo.value = ""; 
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay más nombres para sortear.");
        //Limpiar el resultado
        ResultadoUl.innerHTML = ""; 
        return;
    }
    const randomIndex = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[randomIndex];

    ResultadoUl.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;

    //Eliminar el nombre sorteado de la lista de amigos
    listaAmigos.splice(randomIndex, 1);

    actualizarListaVisual();
}

function actualizarListaVisual() {
    //Vaciar la lista en HTML y volver a generarla con los nombres restantes
    ListaAmigosUl.innerHTML = "";
    listaAmigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ListaAmigosUl.appendChild(li);
    });
}