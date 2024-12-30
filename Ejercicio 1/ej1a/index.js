var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

document.getElementById('comprobar').addEventListener('click', () => {
    const numero = document.getElementById('numero').value; // .value para obtener el valor del input
    const letra = document.getElementById('letra').value;
    const resto = numero % 23;
    const letraCorrecta = letras[resto];
    
    if (letra == letraCorrecta) {
        alert('DNI valido');
    } else {
        alert('DNI no valido. La letra correcta es: ' + letraCorrecta);
    }
});    