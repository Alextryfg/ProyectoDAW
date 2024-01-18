var path = '../xml/clasificacion.xml';
var xmlText = null;

function loadFile(filePath) {
var result = null;
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", filePath, false);
xmlhttp.send();
if (xmlhttp.status==200) {
  result = xmlhttp.responseXML;
}
return result;
}

xmlText = loadFile(path);


function loadTabla(xmlDoc){
const equipos = xmlDoc.getElementsByTagName("equipo");
for (let i = 0; i < equipos.length; i++) {
equipo = equipos[i];
  const imgSrc = equipo.getElementsByTagName("img")[0].getAttribute("src");
  const nombre = equipo.getElementsByTagName("nombre")[0].textContent;
  const puntos = equipo.getElementsByTagName("puntos")[0].textContent;
  const pj = equipo.getElementsByTagName("pj")[0].textContent;
  const pg = equipo.getElementsByTagName("pg")[0].textContent;
  const pe = equipo.getElementsByTagName("pe")[0].textContent;
  const pp = equipo.getElementsByTagName("pp")[0].textContent;
  const gf = equipo.getElementsByTagName("gf")[0].textContent;
  const gc = equipo.getElementsByTagName("gc")[0].textContent;
  const diferencia = equipo.getElementsByTagName("diferencia_de_goles")[0].textContent;
  
  // Crear una fila de la tabla para el equipo actual
  const fila = document.createElement("tr");
  if(i<3){
    fila.classList.add("table-success");
  }else if (equipos.length-i<=3){
    fila.classList.add("table-danger"); //naranja
  }else if (equipos.length-i<=6){
    fila.classList.add("table-warning"); //rojo
  }else{
    fila.classList.add("table-primary"); //azul
  }
  

  // Crear celdas de tabla para cada atributo del equipo
  const celdaImg = document.createElement("td");
  const img = document.createElement("img");
  img.src = imgSrc;
  img.width = 50;
  img.height = 50;
  celdaImg.appendChild(img);
  fila.appendChild(celdaImg);
  
  // Crear celdas de tabla para cada atributo del equipo
  const celdaNombre = document.createElement("td");
  celdaNombre.textContent = nombre;
  fila.appendChild(celdaNombre);
  
  const celdapuntos = document.createElement("td");
  celdapuntos.textContent = puntos;
  fila.appendChild(celdapuntos);
  
  const celdapj = document.createElement("td");
  celdapj.textContent = pj;
  fila.appendChild(celdapj);
  
  const celdapg = document.createElement("td");
  celdapg.textContent = pg;
  fila.appendChild(celdapg);
  
  const celdape = document.createElement("td");
  celdape.textContent = pe;
  fila.appendChild(celdape);
  
  const celdapp = document.createElement("td");
  celdapp.textContent = pp;
  fila.appendChild(celdapp);

  const celdagf = document.createElement("td");
  celdagf.textContent = gf;
  fila.appendChild(celdagf);
  
  const celdagc = document.createElement("td");
  celdagc.textContent = gc;
  fila.appendChild(celdagc);

  const celdadiferencia = document.createElement("td");
  celdadiferencia.textContent = diferencia;
  fila.appendChild(celdadiferencia);
  
  // Agregar la fila a la tabla
  document.getElementById("tabla-equipos").appendChild(fila); 
}

}

loadTabla(xmlText);


