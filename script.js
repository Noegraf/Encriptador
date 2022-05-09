function getText() {

  let texto = document.getElementById("textoingresado").value;

  /* Se resuelve en la siguiente linea texto
//busco vocales

let vocales = /[aeiou]/g;

//muestro en consola las vocales encontradas
console.log (texto.match (vocales));


let coincidencias = texto.match (vocales);

console.log (coincidencias);

//Map de vocales
*/

  const reemplazos = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
  };

  let textoEncrip = texto.replace(/[aeiou]/g, matched => reemplazos[matched]);

  console.log(textoEncrip);

  document.getElementById("textoencriptado").innerHTML = textoEncrip;

 
}

function setText() {

  let texto = document.getElementById("textoencriptado").value;

  const reemplazos = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
  };

  let textoDesEncrip = texto.replace(/ai|enter|imes|ober|ufat/g, matched => reemplazos[matched]);

  console.log(textoDesEncrip);

  document.getElementById("textoencriptado").innerHTML = textoDesEncrip;



}









/* function getText() {

  const texto = document.getElementById("textoingresado").value;

  const RegExp =/[aeiou]/g;

  const reemplazos =["ai",   "enter", "imes", "ober", "ufat"];
  
  console.log(
    texto.match(RegExp)); 

  
 let textoencriptado  = texto.split (RegExp).join(reemplazos);

 console.log(textoencriptado);  

    }
    

function setText() {
  var text = document.getElementById("textoingresado").value;
  console.log(text)
}

*/

/*



prueba nicu 
function getText() {

  const texto = document.getElementById("textoingresado").value;

  const regExp =[["a"], ["e"]];

  var reemplazos =["ai",   "enter", "imes", "ober", "ufat"];

  if (texto === regExp[0]){
return reemplazos[0];
    }




     
 
    




   

}


function setText() {
  var text = document.getElementById("textoingresado").value;
  console.log(text)
}

prueba nicu hasta aca





function getText() {

  const texto = document.getElementById("textoingresado").value;

  const RegExp = /[aeiou]/g;

  const reemplazos = ["ai", "enter", "imes", "ober", "ufat"];
  
  console.log(
    texto.match(RegExp) );  

  
 let textoencriptado  = texto.replaceAll(RegExp, reemplazos)

 console.log(textoencriptado);  

    }
     

function setText() {
  var text = document.getElementById("textoingresado").value;
  console.log(text)
}
*/