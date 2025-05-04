document.addEventListener('DOMContentLoaded', function () {
    // Selecciono las flechas de navegación y el carrusel
    const leftArrow = document.getElementById('left');
    const rightArrow = document.getElementById('right');
    const carousel = document.querySelector('.carousel');
    
    // Manejo del clic en la flecha derecha
    rightArrow.addEventListener('click', function () {
        // Desplazamos el carrusel hacia la derecha, ajustando la distancia
        carousel.scrollBy({
            left: 450, // Distancia a la que se desplazará el carrusel
            behavior: 'smooth' // Desplazamiento suave
        });
    });

    // Manejo del clic en la flecha izquierda
    leftArrow.addEventListener('click', function () {
        // Desplazamos el carrusel hacia la izquierda, ajustando la distancia
        carousel.scrollBy({
            left: -250, // Distancia a la que se desplazará el carrusel
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});
