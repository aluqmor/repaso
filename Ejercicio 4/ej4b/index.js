// cuando se cargue el documento: 
document.addEventListener('DOMContentLoaded', () => {
    // obtengo los elementos y los guardo en constantes
    const ope = document.getElementById('operacion'); 
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const res = document.getElementById('resultado');
    
    // creo una funcion para calcular sumas y restas
    const calcular = () => {
        const valor1 = Number(num1.value); // uso Number() para que el simbolo + sume y no concatene
        const valor2 = Number(num2.value); 
        let resultado = 0;

        // cambio el if a un switch para que de menos asquete
        switch(ope.value) {
            case 'suma':
                resultado = valor1 + valor2;
                break;
            case 'resta':
                resultado = valor1 - valor2;
                break;
        }

        res.textContent = resultado; // el resultado sera el valor de la variable resultado
    };

    // eventos para que al meter un numero se ejecute la funcion
    num1.addEventListener('input', calcular); 
    num2.addEventListener('input', calcular);
    ope.addEventListener('change', calcular); // al cambiar de operacion se ejecuta la funcion
})