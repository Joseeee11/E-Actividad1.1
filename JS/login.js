const formElemnt = document.getElementById("Inicio")

formElemnt.addEventListener("submit", (event) =>{ 
    event.preventDefault();
    let emailForm= document.getElementById("email").value
    let passwordForm= document.getElementById("password").value
    let iniciar = { emailForm:emailForm, passwordForm:passwordForm };
    let iniciarJson= JSON.stringify(iniciar)
    console.log(iniciarJson);
    fetch('http://localhost:3000/login',{
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: iniciarJson,
        mode: 'cors' // Agrega esta opción
    })
        
        
})
    
