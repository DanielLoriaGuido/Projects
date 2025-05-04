const resultScreen = document.getElementById("result"); // Pantalla de la calculadora
const buttons = document.querySelectorAll(".btn"); // Todos los botones

let currentInput = ""; // Variable para almacenar la entrada del usuario

// con esta funcion manejo el ingreso de valores
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value"); // Obtener el valor del botón
        handleInput(value); // Llamar a la función que maneja la entrada
    });
});

// Con esta funcion manejo la entrada de "inputs"
function handleInput(value) {
    if (value === "C") {
        currentInput = ""; // Limpiar pantalla
    } else if (value === "←") {
        currentInput = currentInput.slice(0, -1); // Borrar último carácter
    } else if (value === "=") {
        try {
            currentInput = safeEval(currentInput).toString(); // Evaluar la operación
        } catch (error) {
            currentInput = "Error"; // Manejo de errores
        }
    } else {
        currentInput += value; // Agregar el valor a la pantalla
    }

    resultScreen.value = currentInput; // Actualizar la pantalla
}

// Con esta función reevaluo las expresiones matematicas
function safeEval(expression) {
    return Function(`'use strict'; return (${expression})`)();
}


