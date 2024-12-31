// al cargar el documento: (tengo qye almacenarlos con querySelectorAll y no con getElementByClassName para recorrerlos con forEach)
document.addEventListener('DOMContentLoaded', () => {
    const parrafos = document.querySelectorAll('.parrafoEditable'); // almaceno los parrafos con la clase 'parrafoEditable' en una constante

    parrafos.forEach(parrafo => { // recorro los parrafos
        const editar = document.createElement('button'); // creo el boton
        editar.textContent = 'Editar';
        parrafo.appendChild(editar); // lo añado al final del parrafo
        editar.addEventListener('click', () => {
            const contenido = parrafo.textContent; // almaceno el contenido del parrafo
            const textarea = document.createElement('textarea'); 
            textarea.textContent = contenido; // le añado el contenido del parrafo al textarea

            // creo el boton de aceptar
            const aceptar = document.createElement('button');
            aceptar.textContent = 'Aceptar';

            aceptar.addEventListener('click', () => {
                parrafo.innerHTML = textarea.value; // cambio el contenido del parrafo por el contenido del textarea
            });

            parrafo.innerHTML = ''; // borro el contenido del parrafo
            parrafo.appendChild(textarea); // añado el textarea al parrafo
            parrafo.appendChild(aceptar); // añado el boton de aceptar
        }); 
    });
});