var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;
  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
    {
      lienzo.beginPath();
      lienzo.strokeStyle = color;
      lienzo.moveTo(xinicial,yinicial);
      lienzo.lineTo(xfinal,yfinal);
      lienzo.stroke();
      lienzo.closePath();
    }

function dibujoPorClick()
{
 var lineas =parseInt(texto.value);
 var L = 0;
 var yi, xf;
 var A = "#AFA";
 var espacio = ancho/lineas;
  while(L < lineas)
    {
      yi = espacio * L;
      xf = espacio * ( L + 1);
      dibujarLinea(A, 0,yi,xf,300);
      console.log("Linea" + 1);
      L = L+1;
    }
 dibujarLinea(A,1,1,1,300);
 dibujarLinea(A,1,299,299,299);
 dibujarLinea(A,300,1,1,1);
 dibujarLinea(A,299,299,299,1);

}
