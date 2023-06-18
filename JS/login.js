const formElemnt = document.getElementById("Inicio")

formElemnt.addEventListener("submit", (event) =>{ 
    event.preventDefault();
    let emailForm= document.getElementById("email").value
    let passwordForm= document.getElementById("password").value
    let iniciar = { emailForm:emailForm, passwordForm:passwordForm };
    let iniciarJson= JSON.stringify(iniciar)
    
    fetch('http://localhost:3000/login',{
        "body": iniciarJson,
        method:"Post"
        
    })
        
        .then(x=> console.log("holaaa"))
})
    
