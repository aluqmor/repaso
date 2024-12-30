var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

document.getElementById('comprobar').addEventListener('click', () => {
    const dni = document.getElementById('dni').value.toUpperCase();
    const numero = dni.substring(0, 8); // substring para obtener los 8 primeros caracteres (los numeros)
    const letra = dni.charAt(8); // charAt para obtener el ultimo caracter (la letra)

    if (numero.length != 8) { 
        alert('El DNI debe tener 8 numeros');
        return; // si el numero no tiene 8 numeros detiene la ejecucion del codigo
    }

    const resto = numero % 23;
    const letraCorrecta = letras[resto];
    
    if (letra == letraCorrecta) {
        alert('DNI valido');
    } else {
        alert('DNI no valido. La letra correcta es: ' + letraCorrecta);
    }
});    