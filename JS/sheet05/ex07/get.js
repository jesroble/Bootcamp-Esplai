fetch("https://jsonplaceholder.typicode.com/users")
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((usuarios) => {
        console.log("Usuarios:");
        usuarios.forEach(usuario => {
            console.log(`- ${usuario.name}`)
        });
    })