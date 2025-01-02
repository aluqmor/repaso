export default class Editor {
    // cuando se cree una instancia de la clase Editor va a obtener los parrados y a iniciarlizarse
    constructor() {
        this.parrafos = document.querySelectorAll('p'); // obtengo todos los parrafos (para eliminar el uso de clases)
        this.init();
    }

    init() {
        this.parrafos.forEach(parrafo => { // recorro los parrafos
            const contenido = parrafo.textContent; // almaceno el contenido del parrado
            const editar = this.crearBoton('Editar'); // creo el boton con el metodo crearBoton
            parrafo.appendChild(editar);
            
            editar.addEventListener('click', () => {
                this.editar(parrafo, contenido);
            });
        });
    }

    // metodo para crear botones
    crearBoton(texto) {
        const boton = document.createElement('button');
        boton.textContent = texto;
        return boton;
    }

    editar(parrafo, contenido) {
        const textarea = document.createElement('textarea'); // creo el textarea
        textarea.value = contenido; // le añado el contenido del parrafo al textarea
        
        const aceptar = this.crearBoton('Aceptar');
        const cancelar = this.crearBoton('Cancelar');
        
        aceptar.addEventListener('click', () => {
            parrafo.innerHTML = textarea.value; // cambio el contenido del parrafo por el contenido del textarea
            this.reiniciar(parrafo); // vuelvo a añadir el boton de editar
        });
        
        cancelar.addEventListener('click', () => {
            parrafo.innerHTML = contenido; // vuelvo a poner el contenido original del parrafo
            this.reiniciar(parrafo); // vuelvo a añadir el boton de editar
        });

        parrafo.innerHTML = ''; // borro el contenido del parrafo
        parrafo.appendChild(textarea); // añado el textarea al parrafo
        parrafo.appendChild(aceptar); // añado el boton de aceptar
        parrafo.appendChild(cancelar); // añado el boton de cancelar
    }

    // metodo para poder volver a editar un parrafo ya editado
    reiniciar(parrafo) {
        const botonEditar = this.crearBoton('Editar');
       
        botonEditar.addEventListener('click', () => {
            this.editar(parrafo, parrafo.textContent);
        });

        parrafo.appendChild(botonEditar);
    }
}