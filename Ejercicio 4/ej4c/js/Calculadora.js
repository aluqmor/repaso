const Calculadora = {
    calcular : (num1, num2, ope, res) => {
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
    }
}

export default Calculadora;