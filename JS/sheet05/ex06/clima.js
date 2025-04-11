function obtenerTemperatura()
{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("22ºC");
        }, 2000);
    });
}

function obtenerHumedad()
{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("60%");
        }, 1500);
    });
}

function obtenerViento()
{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("15km/h");
        }, 1000);
    });
}

let temperatura = obtenerTemperatura();
let humedad = obtenerHumedad();
let viento = obtenerViento();

Promise.all([temperatura, humedad, viento])
    .then((resultados) => {
        console.log("===Clima===")
        resultados.forEach((resultado) => console.log(resultado));
    })