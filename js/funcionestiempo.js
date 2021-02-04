//mostrar una accion luego de un tiempo 
// window.setTimeout(funcion a ejecutar, tiempo en milisegundos)

function saludar(){
    document.write("hola <br>");
}

window.setTimeout(saludar, 2000);

//setInterval se vuleve a ejecutar ada undeterminado tiempo en milisegundos
let intervalo = window.setInterval(saludar, 1000);

//metodo para detenerlo clearInterval()
// window.clearInterval(inervalo);