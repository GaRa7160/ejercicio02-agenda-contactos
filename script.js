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
});