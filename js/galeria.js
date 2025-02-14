const galleryContent = {
  diseños: [
    '../imagenes/FOTO4.webp',
    '../imagenes/FOTO2.jpg',
    '../imagenes/FOTO3.webp',
    '../imagenes/FOTO5.webp',
    '../imagenes/FOTO6.jpeg',
    '../imagenes/FOTO7.png',
    '../imagenes/FOTO8.jpg',
    '../imagenes/FOTO9.jpg',
  ],
  tiendasOnline: [
    '../imagenes/TO1.png',
    '../imagenes/TO2.png',
    '../imagenes/TO3.png',
    '../imagenes/TO4.jpg',
    '../imagenes/TO5.png',
    '../imagenes/TO6.png',
    '../imagenes/TO7.jpg',
    '../imagenes/TO8.jpg',
  ],
  blogs: [
    '../imagenes/BLOG1.jpeg',
    '../imagenes/BLOG2.png',
    '../imagenes/BLOG3.jpeg',
    '../imagenes/BLOG4.webp',
    '../imagenes/BLOG5.png',
    '../imagenes/BLOG6.jpg',
    '../imagenes/BLOG7.webp',
    '../imagenes/BLOG9.webp',
  ],
  reels: [
    '../imagenes/videos/reel1.mp4',
    '../imagenes/videos/reel2.mp4',
    '../imagenes/videos/reel3.mp4'
  ]
};
function mostrarGaleria(seccion) {
  let galeria = document.getElementById("galeria");
  galeria.innerHTML = "";

  // Eliminar la clase "activa" de todas las secciones
  document.querySelectorAll(".seccion").forEach(item => {
      item.classList.remove("activa");
  });

  // Agregar la clase "activa" a la sección seleccionada
  let seccionActiva = document.querySelector(`[onclick="mostrarGaleria('${seccion}')"]`);
  if (seccionActiva) {
      seccionActiva.classList.add("activa");
  }

  // Insertar imágenes o videos en la galería
  galleryContent[seccion].forEach(item => {
      let elemento;
      if (item.endsWith(".mp4")) {
          elemento = document.createElement("video");
          elemento.src = item;
          elemento.controls = true;
      } else {
          elemento = document.createElement("img");
          elemento.src = item;
      }
      elemento.onclick = () => abrirModal(item);
      galeria.appendChild(elemento);
  });
}

// Para que al cargar la página, se seleccione "Diseños" automáticamente
document.addEventListener("DOMContentLoaded", function() {
  mostrarGaleria('diseños');
});


// Función para abrir el modal
function abrirModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const modalVideo = document.getElementById("modalVideo");

  if (src.includes(".mp4")) {
      modalImg.style.display = "none";
      modalVideo.style.display = "block";
      modalVideo.src = src;
  } else {
      modalVideo.style.display = "none";
      modalImg.style.display = "block";
      modalImg.src = src;
  }

  modal.style.display = "flex";
}

// Cerrar el modal
function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}






document.addEventListener("DOMContentLoaded", function() {
  // Mostrar la galería de 'diseños' cuando se cargue la página
  mostrarGaleria('diseños');
});

function mostrarGaleria(seccion) {
  let galeria = document.getElementById("galeria");
  galeria.innerHTML = ""; // Limpiar la galería antes de agregar nuevas imágenes

  galleryContent[seccion].forEach(item => {
      let elemento;
      if (item.includes(".mp4")) {
          elemento = document.createElement("video");
          elemento.src = item;
          elemento.controls = true;
      } else {
          elemento = document.createElement("img");
          elemento.src = item;
      }

      elemento.onclick = () => abrirModal(item);
      galeria.appendChild(elemento);
  });
}
