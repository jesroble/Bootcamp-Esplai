function espera(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

espera(2000).then(() => {
    console.log("Han pasado 2 segundos");
});