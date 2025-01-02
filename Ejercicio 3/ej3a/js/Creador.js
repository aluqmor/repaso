// creo una nueva clase parsa crear nuevos parrafos
export default class Creador {
    constructor() {
        this.init();
    }

    init() {
        const botones = document.querySelectorAll('button'); // obtengo todos los botones (del html)
        
        // al pulsar los botones se ejecuta la funcion insertarParrafo
        botones.forEach(boton => {
            boton.addEventListener('click', () => {
                this.insertarParrafo(boton);
            });
        });
    }

    insertarParrafo(boton) {
        const textarea = document.createElement('textarea'); // creo el textarea del nuevo parrafo
        const aceptar = document.createElement('button'); // creo el boton de aceptar
        aceptar.textContent = 'Aceptar'; 
        const cancelar = document.createElement('button'); // creo el boton de cancelar
        cancelar.textContent = 'Cancelar';

        boton.innerHTML = ''; // con esto borro el contenido del boton pero no el boton en si, no se como borrar el boton
        boton.appendChild(textarea); // añado el textarea
        boton.appendChild(aceptar); // añado el boton de aceptar
        boton.appendChild(cancelar); // añado el boton de cancelar
    }
}