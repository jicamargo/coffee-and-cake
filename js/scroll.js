
	// objeto para propiedades
	var propScroll ={

		posicion: window.pageYOffset,
		scroll_suave: document.getElementsByClassName('scroll-suave'),
		volver_arriba: document.getElementsByClassName('volver-arriba'),
	 	destino: null,
	 	seccion_distancia: null,
	 	intervalo: null
	}


	// objeto para metodos
	var metScroll ={

		inicio: function() {

			for (var i = 0; i < propScroll.scroll_suave.length; i++) {
				propScroll.scroll_suave[i].addEventListener('click', metScroll.moverse);
			}

			for (var i = 0; i < propScroll.volver_arriba.length; i++) {
				propScroll.volver_arriba[i].addEventListener('click', metScroll.subir);
			}

		},

		moverse: function(e) {

			e.preventDefault();
			clearInterval(propScroll.intervalo); // para que no se cruce con un intervalo anterior
			propScroll.destino = this.getAttribute('href');
	 		propScroll.seccion_distancia = document.querySelector(propScroll.destino).offsetTop - 94 ; // le resto la altura del menu

	 		propScroll.posicion = window.pageYOffset;
	 		propScroll.intervalo = setInterval(function() {
	 			if (propScroll.posicion < propScroll.seccion_distancia) {
	 				propScroll.posicion +=30;

	 				if (propScroll.posicion >= propScroll.seccion_distancia){
	 					clearInterval(propScroll.intervalo);
	 					propScroll.posicion = propScroll.seccion_distancia;
	 				}
	 			} else {
	 				propScroll.posicion -=30;
	 				if (propScroll.posicion <= propScroll.seccion_distancia){
	 					clearInterval(propScroll.intervalo);
	 					propScroll.posicion = propScroll.seccion_distancia;
	 				}
	 			}

	 			window.scrollTo(0,propScroll.posicion);

	 		}, 15); // 15 milisegundos
		},

		subir: function(e) {

			e.preventDefault();
			clearInterval(propScroll.intervalo); // para que no se cruce con un intervalo anterior

	 		propScroll.posicion = window.pageYOffset;

	 		propScroll.intervalo = setInterval(function() {
	 			if (propScroll.posicion >0) {
	 				propScroll.posicion -=100;

	 				if (propScroll.posicion <= 0){
	 					clearInterval(propScroll.intervalo);
						propScroll.posicion = 0;	 					
	 				}
	 			}
	 			window.scrollTo(0,propScroll.posicion);
			}, 10); // 15 milisegundos
 
		}

	}

	metScroll.inicio();
