const enviar = document.getElementById("enviar")
let saldo = parseInt(localStorage.getItem("dinero"))

enviar.addEventListener("click",(e) =>{     
    e.preventDefault();
    const plata = parseInt(document.getElementById("Noplata").value)     
    Saldo = parseInt(saldo - plata)    
    console.log(Saldo)     
    if (Saldo < 10){
        Saldo = parseInt(Saldo+saldo)
        alert("Tu cuenta no puede tener menos de $10, no se realizó la acción (Volviendo al menu)")
        window.location.href = "http://127.0.0.1:5500/TAREAS%20M2/proyecto%20final/Menu.html";
    }else{
    localStorage.setItem("dinero",Saldo)     
    alert("se a retirado $"+plata+" de su Cuenta , total de dinero Restante $"+Saldo)      
    window.location.href = "http://127.0.0.1:5500/TAREAS%20M2/proyecto%20final/Menu.html";
    }
})