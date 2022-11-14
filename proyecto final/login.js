const formLogin = document.getElementById('form-login')
const btnLogin = document.getElementById('btn-login')

var usuarios =[
    {nombre : "Mali",
    contraseña : "1234",
    dinero : "200"},
    {nombre : "Gera",
    contraseña : "4321",
    dinero : "290"},
    {nombre : "Peter",
    contraseña : "6969",
    dinero : "67"}
]

btnLogin.addEventListener("click",(e) => {
    e.preventDefault();
    const user = document.getElementById("name").value
    const password = document.getElementById('password').value
    let log = false
for(i = 0 ; i < 3 ; i++){
        if(usuarios[i].nombre === user && usuarios[i].contraseña === password){
            if(usuarios[i].nombre === "Mali"){
                localStorage.setItem("dinero", 200)
            }
            if(usuarios[i].nombre === "Gera"){
                localStorage.setItem("dinero", 290)
            }            
            if(usuarios[i].nombre === "Peter"){
                localStorage.setItem("dinero", 67)
            }
            window.location.href = "http://127.0.0.1:5500/TAREAS%20M2/proyecto%20final/Menu.html"
            log = true

        }else{

        }


        }
if (log === false){
alert("usuario no registrado (y este random)")
}
        })
