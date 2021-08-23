let button = document.getElementById('submit');
button.addEventListener('click', function localStotarage(e){
    e.preventDefault();
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let ocupacion = document.querySelector('.form-control').value;
    let recomendacion = document.querySelector('.input-radio').value;
    let gusto = document.querySelector('.form-contro').value;
    let mejora = document.getElementById('mejora').value;
    let comentarios = document.getElementById('comentarios').value;


    if(nombre == ""|| apellido == ""|| email == ""|| number== ""){
        alert('INGRESE TODOS LOS CAMPOS')
        return true;
    }else{
        if(isNaN()){
            localStorage.setItem("Nombre", nombre);
            localStorage.setItem("Apellido", apellido);
            localStorage.setItem("Email", email);
            localStorage.setItem("Edad", number);
            localStorage.setItem("Ocupación", ocupacion);
            localStorage.setItem("Recomendación", recomendacion);
            localStorage.setItem("Gusto", gusto);
            localStorage.setItem("Mejoras", mejora);
            localStorage.setItem("Comentarios",comentarios);
            getLocalStorage()
        }else{
             alert("INCORRECTO");
        }
        return false;
    }
})
function getLocalStorage(){
    usuario = {}
  let userSave = localStorage.getItem("Nombre");
  let lastName = localStorage.getItem("Apellido");
}

