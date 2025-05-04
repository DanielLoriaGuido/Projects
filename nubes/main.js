const containerElement = document.getElementById('container')

// Se asigna al HTML interno del contenedor 20 repeticiones del div con clases 'cloud', 'cloudBubble1' y 'cloudBubble2' 
// Esto genera múltiples nubes en la pantalla
containerElement.innerHTML = `
<div class="cloud">
    <div class="cloudBubble1"></div>
    <div class="cloudBubble2"></div>
</div>`.repeat(15)

const elements = document.getElementsByClassName('cloud');

// Se recorre cada nube para aplicarle estilos y animaciones individualmente
for (let j = 0; j < elements.length; j++) {
    const element = elements[j];

    // Se posiciona la nube aleatoriamente en el eje Y (vertical)
    element.style.top = (Math.random() * 100) + '%'

    // Se posiciona la nube aleatoriamente en el eje X (horizontal)
    element.style.left = (Math.random() * 100) + '%'

    // Se escala la nube con un valor aleatorio entre 0.3 y 1.0 (tamaños variados)
    element.style.transform = "scale(" + ((Math.random() * 0.7) + 0.3) + ")"

    // Se define el tiempo que durará la transición, entre 6 y 26 segundos
    const intervalTimeInSeconds = (Math.random() * 20) + 6
    element.style.transition = "all linear " + intervalTimeInSeconds + "s"

    // Se decide aleatoriamente si la animación comienza desde la derecha o la izquierda
    const startRight = Math.random() > 0.5

    // Después de 100 milisegundos, se posiciona la nube fuera de pantalla a la izquierda o derecha
    setTimeout(() => {
        element.style.left = startRight ? '100%' : '-50%'
    }, [100])

    // Se inicializa una variable de control para la animación
    i = startRight ? 1 : 0

    // Se alterna el movimiento de las nubes entre izquierda y derecha en intervalos definidos
    setInterval(() => {
        if (i % 2 === 0) {
            element.style.left = '100%' // se mueve hacia la derecha
        } else {
            element.style.left = '-50%' // se mueve hacia la izquierda
        }
        i += 1
    }, intervalTimeInSeconds * 1000)
}
