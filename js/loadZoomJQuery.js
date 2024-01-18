/* JQUERY EFECTOS de Zoom para Merchandaising */

$(document).ready(function() {
	$('.zoom-container').each(function() { // Recorremos cada div con la clase "zoom-container"
	  var container = $(this);
	  var image = container.find('.zoom-image'); // Buscamos la imagen dentro de cada contenedor
	  var scale = 1.5; // Factor de zoom
	  
	  container.on('mousemove', function(e) {
		var containerOffset = container.offset();
		var x = e.pageX - containerOffset.left;
		var y = e.pageY - containerOffset.top;
		var centerX = container.width() / 2;
		var centerY = container.height() / 2;
		var offsetX = (centerX - x) * 0.5; // Ajuste para centrar el zoom en el puntero
		var offsetY = (centerY - y) * 0.5;
		var transform = 'scale(' + scale + ') translate(' + offsetX + 'px,' + offsetY + 'px)';
		image.css({
		  'transform': transform,
		  '-webkit-transform': transform // Prefijos para compatibilidad con navegadores antiguos
		});
	  });
	  
	  container.on('mouseleave', function() {
		image.css({
		  'transform': 'scale(1)',
		  '-webkit-transform': 'scale(1)'
		});
	  });
	});
  });