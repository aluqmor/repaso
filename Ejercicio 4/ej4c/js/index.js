import Calculadora from './Calculadora.js';

// cuando se cargue el documento: 
document.addEventListener('DOMContentLoaded', () => {
    // obtengo los elementos y los guardo en constantes
    const ope = document.getElementById('operacion'); 
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const res = document.getElementById('resultado');

    const calcular = () => {
        Calculadora.calcular(num1, num2, ope, res);
    };
    
    // eventos para que al meter un numero se ejecute la funcion
    num1.addEventListener('input', calcular); 
    num2.addEventListener('input', calcular);
    ope.addEventListener('change', calcular); // al cambiar de operacion se ejecuta la funcion
})