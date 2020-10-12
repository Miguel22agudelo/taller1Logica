let name = document.getElementById("inputName")
let lastName = document.getElementById("inputLastName")
let city = document.getElementById("inputCity")
let phoneNumber = document.getElementById("inputPhoneNumber")
let email = document.getElementById("inputEmail")
let password = document.getElementById("inputPassword")
let signUp = document.getElementById("signUpButton")
let helpMessage = document.getElementById("helpText")

signUp.addEventListener("click",validarFormulario)

function validarFormulario(e){

    e.preventDefault()

    if(name.value == ""){
        name.classList.add("is-invalid")
    }else{
        name.classList.remove("is-invalid")
        name.classList.add("is-valid")
    }
    
    if (lastName.value == ""){
        lastName.classList.add("is-invalid")
    }else{
        lastName.classList.remove("is-invalid")
        lastName.classList.add("is-valid")
    }
    
    if (city.value == ""){
        city.classList.add("is-invalid")
    }else{
        city.classList.remove("is-invalid")
        city.classList.add("is-valid")
    }
    
    if (phoneNumber.value == ""){
        phoneNumber.classList.add("is-invalid")
    }else{
        phoneNumber.classList.remove("is-invalid")
        phoneNumber.classList.add("is-valid")
    }
    
    if (email.value == ""){
        email.classList.add("is-invalid")
    }else{
        email.classList.remove("is-invalid")
        email.classList.add("is-valid")
    }
    
    if (password.value == ""){
        password.classList.add("is-invalid")
    }else{
        password.classList.remove("is-invalid")
        password.classList.add("is-valid")
    }

    if (name.value== "" || lastName.value == "" || city.value == "" || phoneNumber.value == "" || email.value == "" || password.value == ""){
        alert("Olvidaste diligenciar los campos en rojo")
    }else{
        
    }
}