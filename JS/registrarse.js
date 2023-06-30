const formElemnt = document.getElementById("registrar")

formElemnt.addEventListener("submit", (event) =>{ 
    event.preventDefault();
    let emailForm= document.getElementById("email").value
    let passwordForm= document.getElementById("password").value
    let nameForm= document.getElementById("name").value
    let confirmPasswordForm= document.getElementById("confirm-password").value
    if (passwordForm != confirmPasswordForm ) {
        alert("la contraseña de comprobación no coincide")
        return
    }
    let registrar = { emailForm:emailForm, passwordForm:passwordForm,confirmPasswordForm:confirmPasswordForm, nameForm:nameForm};
    let registrarJson= JSON.stringify(registrar)
    console.log(registrarJson);
    fetch('http://localhost:3000/login',{
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: registrarJson,
        mode: 'cors' // Agrega esta opción
    })
        
        
})
    
