"use strict";

/* funcion para proteger el codigo de JS. - queda todo con ambito privado*/
(function () {
  /* objeto para las propiedaddes*/
  var proplightbox = {
    imgcontainer: document.getElementsByClassName('lightbox'),
    imagen: null,
    imagensrc: null,
    cuerpoDom: document.getElementsByTagName('body')[0],
    lightbox_container: null,
    modal: null,
    cerrarModal: null,
    animacion: 'fade'
  };
  var metlightbox = {
    inicio: function inicio() {
      for (var i = 0; i < proplightbox.imgcontainer.length; i++) {
        proplightbox.imgcontainer[i].addEventListener('click', metlightbox.capturaimagen);
      }
    },
    capturaimagen: function capturaimagen() {
      proplightbox.imagen = this;
      metlightbox.lightbox(proplightbox.imagen);
    },
    lightbox: function lightbox(imagen) {
      proplightbox.imagensrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);
      console.log(proplightbox.imagensrc);
      proplightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');
      proplightbox.lightbox_container = document.getElementById('lightbox_container');
      proplightbox.lightbox_container.style.width = '100%';
      proplightbox.lightbox_container.style.height = '100%';
      proplightbox.lightbox_container.style.position = 'fixed';
      proplightbox.lightbox_container.style.zIndex = '1000';
      proplightbox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
      proplightbox.lightbox_container.style.top = '0';
      proplightbox.lightbox_container.style.left = '0';
      proplightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
      proplightbox.modal = document.getElementById('modal');
      proplightbox.modal.style.height = '100%';
      proplightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', proplightbox.imagensrc);
      proplightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagen-modal');
      /* / animacion para que aparezca suavemente. en lso estilos CCS se le agrega transition   */

      if (proplightbox.animacion == 'fade') {
        document.getElementsByClassName('imagen-modal')[0].style.opacity = 0;
        setTimeout(function () {
          document.getElementsByClassName('imagen-modal')[0].style.opacity = 1;
        }, 50);
      }

      ;
      proplightbox.modal.innerHTML += '<i id="cerrar_modal" class="fa fa-times" aria-hidden="true"></i>';
      proplightbox.cerrarModal = document.getElementById('cerrar_modal');
      proplightbox.cerrarModal.addEventListener('click', metlightbox.cerrarModal);
    },
    cerrarModal: function cerrarModal() {
      proplightbox.cuerpoDom.removeChild(proplightbox.lightbox_container);
    }
  };
  metlightbox.inicio();
})();
//# sourceMappingURL=lightbox.dev.js.map
