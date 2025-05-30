//Duplicacion de las cartas

// Seleccionamos el contenedor de las opiniones
const container = document.querySelector('.opinion_container');

// Obtenemos todas las tarjetas que ya están dentro
const cards = container.querySelectorAll('.opinion_card');

// Recorremos cada tarjeta y la clonamos
cards.forEach(card => {
  const clone = card.cloneNode(true); // true = copia todo, incluyendo contenido interno
  container.appendChild(clone); // Agregamos la copia al final del contenedor
});

