function loginUsuario()
{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Usuario autenticado");
            resolve("usuario123");
        }, 1000);
    });
}

function obtenerPerfil(usuario)
{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Obteniendo perfil para el usuario: ${usuario}`);
            resolve({nombre: "Ana", rol: "admin"});
        }, 1000);
    });
}

function mostrarDashboard(perfil)
{
    setTimeout(() => {
        console.log(`Bienvenid@, ${perfil.rol} ${perfil.nombre}`);
    }, 1000);
}

loginUsuario()
    .then((usuario) => obtenerPerfil(usuario))
    .then((perfil) => mostrarDashboard(perfil))
    .catch((error) => {
        console.error("Ocurrió un error:", error); // salta aquí si hay un error
    });