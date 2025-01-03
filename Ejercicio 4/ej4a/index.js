// cuando se cargue el documento: 
document.addEventListener('DOMContentLoaded', () => {
    // obtengo los elementos y los guardo en constantes
    const ope = document.getElementById('operacion'); 
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const res = document.getElementById('resultado');
    
    // creo una funcion para calcular sumas y restas
    const calcular = () => {
        const valor1 = num1.value; // el valor del input1 sera el numero introducido
        const valor2 = num2.value; // el valor del input2 sera el numero introducido
        let resultado = 0;

        // (se que esto da un poco de asquete pero es la forma mas simple que se me ocurria)
        if (ope.value == 'suma') {
            resultado = valor1 + valor2;
        } else if (ope.value == 'resta') {
            resultado = valor1 - valor2;
        }

        res.textContent = resultado; // el resultado sera el valor de la variable resultado
    };

    // eventos para que al meter un numero se ejecute la funcion
    num1.addEventListener('input', calcular); 
    num2.addEventListener('input', calcular);
    ope.addEventListener('change', calcular); // al cambiar de operacion se ejecuta la funcion
})