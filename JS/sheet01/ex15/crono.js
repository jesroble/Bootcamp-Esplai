function get_time()
{
    seconds++;
    time.textContent = seconds;
}

let initc = document.getElementById("iniciar");
let stopc = document.getElementById("detener");
let time = document.getElementById("time");

let seconds = 0;
let interval;

initc.addEventListener("click", () => {
    if (!interval)
        interval = setInterval(get_time, 1000);
});

stopc.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});