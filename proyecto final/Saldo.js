const enviar = document.getElementById("boton_Saldo")
let saldo = parseInt(localStorage.getItem("dinero"))

enviar.addEventListener("click",(e) =>{     
    e.preventDefault();
    const plata = parseInt(document.getElementById("Plata").value)     
    Saldo = parseInt(saldo+plata)     
    console.log(Saldo)    

    if (Saldo > 990){
        Saldo = parseInt(Saldo-saldo)
        alert("Superaste el limite de saldo por cuenta, no se realizó la acción (Volviendo al menu)")
        window.location.href = "http://127.0.0.1:5500/TAREAS%20M2/proyecto%20final/Menu.html";
    }else{
    localStorage.setItem("dinero",Saldo)     
    alert("se a ingresado $"+plata+" de su Cuenta , total de dinero Restante $"+Saldo)      
    window.location.href = "http://127.0.0.1:5500/TAREAS%20M2/proyecto%20final/Menu.html";
    }
})