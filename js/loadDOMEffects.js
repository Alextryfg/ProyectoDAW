
/* EFECTOS DE LAS IMAGENES DE LOS JUGADORES MOUSEOVER Y OUT*/
/* QUERY SELECTOR ALL */

const players = document.querySelectorAll('.rotate-on-hover');

players.forEach(elem => {
	//crear eleemnto p y añadirle la clase nombrej y ponerlo de hijo de elem
     elem.addEventListener('mouseover', () => {
		elem.classList.add('big-rotate');
  });
});

players.forEach(elem => {
  elem.addEventListener('mouseout', () => {
    elem.classList.remove('big-rotate');
  });
});

/* EFECTO JAVASCRIPT DE OSCURECER Y CRECER CON CLICK Y DOBLE CLICK*/
/* GETBYCLASSNAME */

const myElement = document.getElementsByClassName('oscurecer');

for (let i = 0; i < myElement.length; i++) { 
  myElement[i].addEventListener('dblclick', () => {myElement[i].classList.add('big-darker');});
  myElement[i].addEventListener('click', () => {myElement[i].classList.remove('big-darker');});
}

/* BORDE, LETRA BLANCA JUSTIFICADA Y COLOR DE FONDO DE LOS ARTICULOS AL PASAR EL RATON POR ENCIMA */
/* GETBYTAGNAME */
const articleTags = document.getElementsByTagName('article');

// Change border of tag demo to blue
for (let i = 0; i < articleTags.length; i++) {
  articleTags[i].addEventListener('mouseover', () => {articleTags[i].classList.add('hover-effect');});
  articleTags[i].addEventListener('click', () => {articleTags[i].classList.remove('hover-effect');})
}

/* QUERY SELECTOR */

const imgAgradecimiento = document.querySelector('#agradecimiento img');

// Agrega la clase "efecto-agradecimiento" a la imagen
if(imgAgradecimiento){
	imgAgradecimiento.addEventListener('mouseover', () => { imgAgradecimiento.classList.remove('efecto-agradecimiento-desactivar');});
	imgAgradecimiento.addEventListener('mouseover', () => { imgAgradecimiento.classList.add('efecto-agradecimiento');});
	
	// Elimina la clase "efecto-agradecimiento" a la imagen
	imgAgradecimiento.addEventListener('mouseout', () => { imgAgradecimiento.classList.add('efecto-agradecimiento-desactivar');});
}


/* EFECTO CON DOM GET BY ID */

const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim" + 
"ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
"in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" + 
"deserunt mollit anim id est laborum" +
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim" + 
"ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
"in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" + 
"deserunt mollit anim id est laborum"; // texto a escribir
const velocidadEscritura = 10; // Cuanto más bajo, más rápido
const elementoAEscribir = document.getElementById("textoEspecial"); // elemento HTML

let i = 0;
function escribirTexto() {
  if (i < texto.length) {
	if(elementoAEscribir){
		elementoAEscribir.innerHTML += texto.charAt(i);
	}
    i++;
    setTimeout(escribirTexto, velocidadEscritura);
  }
}
escribirTexto();


  
  

  


  



