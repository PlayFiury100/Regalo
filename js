const cuadro = document.querySelectorAll(".cuadro");
const tiempoFaltante = document.querySelector("#tiempo");
let puntaje = document.getElementById("puntaje");
let resultado = 0;
let tiempoActual = tiempoFaltante.textContent;
function cuadroAzar() {
    cuadro.forEach((nombreDeClase) => {
    nombreDeClase.classList.remove("topo1");
});
    let posicionAlAzar = cuadro[Math.floor(Math.random() * 9)];
    posicionAlAzar.classList.add("topo1");
posicionTopo = posicionAlAzar.id;
}
cuadro.forEach((identificador) => {
identificador.addEventListener("click", () => {
    if (identificador.id === posicionTopo) {
    resultado = resultado + 1;
    puntaje.textContent = resultado;
    posicionTopo = null;
}
});
});
function moverTopo() {
    tiempoTopo = setInterval(cuadroAzar, 350);
}
moverTopo();
function cuentaRegresiva() {
    tiempoActual--;
    tiempoFaltante.textContent = tiempoActual;
if (tiempoActual === 0) {
    clearInterval(idTiempo);
    clearInterval(tiempoTopo);
    alert("lo siento mi perro, se acabo el tiempo, tu puntaje fue de " +resultado +" corruptos Detenidos");
}
}
let idTiempo = setInterval(cuentaRegresiva, 1000);




const listItems = document.querySelectorAll('.animated-list li');

document.querySelector('.animated-list').addEventListener('mouseover', () => {
    listItems.forEach(item => {
        item.style.animationPlayState = 'running';
    });
});

document.querySelector('.animated-list').addEventListener('mouseout', () => {
    listItems.forEach(item => {
        item.style.animationPlayState = 'paused';
    });
});
