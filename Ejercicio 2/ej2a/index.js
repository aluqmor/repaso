// al cargar el documento: (tengo qye almacenarlos con querySelectorAll y no con getElementByClassName para recorrerlos con forEach)
document.addEventListener('DOMContentLoaded', () => {
    const parrafos = document.querySelectorAll('.parrafoEditable'); // almaceno los parrafos con la clase 'parrafoEditable' en una constante

    parrafos.forEach(parrafo => { // recorro los parrafos
        const editar = document.createElement('button'); // creo el boton
        editar.textContent = 'Editar';
        parrafo.appendChild(editar); // lo añado al final del parrafo
    });
});