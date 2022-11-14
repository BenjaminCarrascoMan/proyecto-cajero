console.log("Menu")

const btncsaldo = document.getElementById('btn-Csaldo')
const btncingresa = document.getElementById('btn-Ingresa')
const btncretira = document.getElementById('btn-Retira')
const btncsalir = document.getElementById('btn-Salir')

btncsaldo.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "http://127.0.0.1:5500/TAREAS%20M2/proyecto%20final/Consulta.html";
})

btncingresa.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "http://127.0.0.1:5500/TAREAS%20M2/proyecto%20final/Saldo.html?";
})

btncretira.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "http://127.0.0.1:5500/TAREAS%20M2/proyecto%20final/Retirar.html?";
})

btncsalir.addEventListener('click', (e) => {
    alert("Saliendo")
    e.preventDefault();
    window.location.href = "http://127.0.0.1:5500/TAREAS%20M2/proyecto%20final/login.html";
})