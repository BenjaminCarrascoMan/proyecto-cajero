

const Box = document.getElementById("Box") 
Box.innerHTML = `<p>Resultado ${localStorage.getItem("dinero")}</p>`


const menu = document.getElementById("Menu")
menu.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "http://127.0.0.1:5500/TAREAS%20M2/proyecto%20final/Menu.html";
})