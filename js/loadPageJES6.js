  /* EFECTO DE JES6 DE CARGA DE PANTALLA */

  window.addEventListener("load", async () => {
	const loader = document.getElementById("loader");
	loader.classList.remove("fadeOut");
});

  
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("fadeOut");
  }, 1500);
});