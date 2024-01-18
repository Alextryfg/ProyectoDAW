// JavaScript para cargar los datos del archivo JSON
const nombrej = document.querySelectorAll('.nombrej');
const caracteristicasj = document.querySelectorAll('.caracteristicasj');
const caracteristicasj2 = document.querySelectorAll('.caracteristicasj2');
const caracteristicasj3 = document.querySelectorAll('.caracteristicasj3');
const caracteristicasj4 = document.querySelectorAll('.caracteristicasj4');
const posicionj = document.querySelectorAll('.posicionj');
const imagenj = document.querySelectorAll('.imagenj');
const equipoj = document.querySelectorAll('.equipoj');
const nacionalidadj = document.querySelectorAll('.nacionalidadj');


fetch('../json/players.json')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      // Actualizar los valores de los elementos HTML con los datos del archivo JSON
      nombrej[i].textContent = data[i].nombre;
      caracteristicasj[i].textContent = data[i].PAC;
      caracteristicasj2[i].textContent = data[i].DRIFT;
      caracteristicasj3[i].textContent = data[i].DEF;
      caracteristicasj4[i].textContent = data[i].SHOT;
      posicionj[i].textContent = data[i].POS;
      imagenj[i].src = data[i].picj;
      nacionalidadj[i].src= data[i].nacionj;
      equipoj[i].src = data[i].clubj;
    }
  })
  .catch(error => {
    console.error('Ha ocurrido un error:', error);
  });
