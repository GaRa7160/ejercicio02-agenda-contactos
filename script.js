let contactos = [];

document.getElementById("btnAgregar").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;

    if (nombre === "" || telefono === "" || correo === "") {
        alert("Completa todos los campos");
        return;
    }

    contactos.push({ nombre, telefono, correo });
    document.getElementById("nombre").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value = "";
    mostrarContactos();
});

function mostrarContactos() {
    const lista = document.getElementById("listaContactos");
    lista.innerHTML = "";
    contactos.forEach((c, index) => {
        const li = document.createElement("li");
        li.className = "contacto";
        li.innerHTML = `<span>${c.nombre} - ${c.telefono} - ${c.correo}</span>
                         <button onclick="eliminarContacto(${index})">Eliminar</button>`;
        lista.appendChild(li);
    });
}

function eliminarContacto(index) {
    contactos.splice(index, 1);
    mostrarContactos();
}