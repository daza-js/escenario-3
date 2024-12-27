// Seleccionar el formulario y el área de resultados
const form = document.getElementById("numberForm");
const result = document.getElementById("result");
const alert = document.getElementsByClassName("alert")[0];

const showAlert = (alertElement, type) => {
    alertElement.style.display = "block";
    // alertElement.classList.remove("alert-success", "alert-danger");
    alertElement.classList.add(`alert-${type}`);
};

function calculateMaxNumber(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const num3 = parseInt(document.getElementById("num3").value);


    // Validar que los números sean positivos
    if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
        showAlert(alert, "danger");

        result.textContent = "Por favor, ingrese números positivos.";
        return;
    }

    // Validar si todos los nums son iguales
    if (num1 === num2 && num2 === num3) {
        showAlert(alert, "info");

        result.textContent = "Todos los números son iguales.";
        return;
    }

    // Calcular el número mayor
    const mayor = Math.max(num1, num2, num3);

    showAlert(alert, "success");
    // Mostrar el resultado
    result.textContent = `El número mayor es: ${mayor}`;
};

// Manejar el evento de envío del formulario
form.addEventListener("submit", calculateMaxNumber);
