function espera(ms)
{
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function cuentaRegresiva() 
{
    console.log("Preparando cuenta regresiva...");
    await espera(1000);
    console.log("3...");
    await espera(1000);
    console.log("2...");
    await espera(1000);
    console.log("1...");
    await espera(1000);
    console.log("¡Despegue!");
}

cuentaRegresiva();