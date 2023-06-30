function AbrirElMenu() {
    document.getElementById("AbreYCierra").style.width = "16vh";
    document.getElementById("CerrarFuera").style.width = "100%";
    document.getElementById("CerrarFuera").style.transitionDelay = "0.42s";
  }
  function CerrarElMenu(){
    document.getElementById("AbreYCierra").style.width = "0";
    document.getElementById("CerrarFuera").style.width = "0%";
    document.getElementById("CerrarFuera").style.transitionDelay = "0s";
  }




  let OrdenMostrar = 1;
  MostrarVisibles(OrdenMostrar);
  
  function Mover(n) {
    document.getElementsByClassName("DestacadosSeccion")[0].style.flexDirection = "row";
    MostrarVisibles(OrdenMostrar += n);    
  }
  

  
  function MostrarVisibles(n) {
    let i;
    let Disponibles = document.getElementsByClassName("juego");

    if (n > Disponibles.length) {
      OrdenMostrar = 1;
    }
    if (n < 1) {
      OrdenMostrar = Disponibles.length;
    }

    for (i = 0; i < Disponibles.length; i++) {
      Disponibles[i].style.display = "none";
    }
  
    Disponibles[OrdenMostrar-1].style.display = "flex";
    if (Disponibles[OrdenMostrar]) {
      Disponibles[OrdenMostrar].style.display = "flex";
    }
    if (!Disponibles[OrdenMostrar]) {
      Disponibles[0].style.display = "flex";
      document.getElementsByClassName("DestacadosSeccion")[0].style.flexDirection = "row-reverse";
      
    }
  }



  
  Filtro("Todos")
function Filtro(c) {
  var x, i;
  x = document.getElementsByClassName("Fila");
  
  if (c == "Todos") c = "";
  for (i = 0; i < x.length; i++) {
    QuitarLoQueNoVa(x[i], "Mostrar");
    if (x[i].className.indexOf(c) > -1) {
      busquedaDiabloQueSueñoCargo(x[i], "Mostrar");
    }
  }
}


function busquedaDiabloQueSueñoCargo(elemento, name) {
  var i, arr1, arr2;

  arr1 = elemento.className.split(" ");
  
  arr2 = name.split(" ");
  
  for (i = 0; i < arr2.length; i++) {
    
    if (arr1.indexOf(arr2[i]) == -1) {
      elemento.className += " " + arr2[i];
    }
  }
}

function QuitarLoQueNoVa(elemento, name) {
  var i, arr1, arr2;
  arr1 = elemento.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  elemento.className = arr1.join(" ");

}



var botonContenedor = document.getElementById("FitroColador3000");
var botones = botonContenedor.getElementsByClassName("Boton");
for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function(){
    var loQueSeMuestra = document.getElementsByClassName("activoPapi");
    
    loQueSeMuestra[0].className = loQueSeMuestra[0].className.replace(" activoPapi", "");

    this.className += " activoPapi";
    
  });
}