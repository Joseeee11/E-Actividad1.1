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
  
