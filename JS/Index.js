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
  
    Disponibles[OrdenMostrar-1].style.display = "block";
    if (Disponibles[OrdenMostrar]) {
      Disponibles[OrdenMostrar].style.display = "block";
    }
    if (!Disponibles[OrdenMostrar]) {
      Disponibles[0].style.display = "block";
      document.getElementsByClassName("DestacadosSeccion")[0].style.flexDirection = "row-reverse";
      
    }
  }