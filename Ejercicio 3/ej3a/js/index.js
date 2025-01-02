import Editor from './Editor.js';
import Creador from './Creador.js';

// cuando cargue el documento, creo una instancia de la clase Editor
document.addEventListener('DOMContentLoaded', () => {
    new Editor();
    new Creador();
});