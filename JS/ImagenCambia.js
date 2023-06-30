
let CuentaDeDondeVa = 1;
MostrandoContenido(CuentaDeDondeVa);

function CambiarIMG(n) {
  MostrandoContenido(CuentaDeDondeVa += n);
}

function currentSlide(n) {
  MostrandoContenido(CuentaDeDondeVa = n);
}

function MostrandoContenido(n) {
  let i;
  let Mostrando = document.getElementsByClassName("ContenedorMultimedia");
  let decoracions = document.getElementsByClassName("decoracion");
  if (n > Mostrando.length) {CuentaDeDondeVa = 1}    
  if (n < 1) {CuentaDeDondeVa = Mostrando.length}
  for (i = 0; i < Mostrando.length; i++) {
    Mostrando[i].style.display = "none";  
  }
  for (i = 0; i < decoracions.length; i++) {
    decoracions[i].className = decoracions[i].className.replace(" activo", "");
  }
  Mostrando[CuentaDeDondeVa-1].style.display = "flex";  
  decoracions[CuentaDeDondeVa-1].className += " activo";
}