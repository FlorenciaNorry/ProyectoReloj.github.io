
function obtenerFecha() {
    // obtener la fecha actual
    let fecha = new Date(),
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();
    console.log(fecha.getFullYear());

    // traigo los elementos html necesarios
    let pHoras = document.getElementById('horas'),
        pminutos = document.getElementById('minutos'),
        psegundos = document.getElementById('segundos'),
        pdiaSemana = document.getElementById('diaSemana'),
        pnumDia = document.getElementById('numDia'),
        pmes = document.getElementById('mes'),
        panio = document.getElementById('anio');

    // asignar los valores necesarios

    let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    pdiaSemana.innerHTML = semana[fecha.getDay()];

    pnumDia.innerHTML = fecha.getDate();

    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    pmes.innerHTML = meses[fecha.getMonth()];

    panio.innerHTML = fecha.getFullYear();

    // asigno los valores de la hora
    if (horas < 10) {
        horas = '0' + horas;
    }
    if (minutos < 10) {
        minutos = '0' + minutos;
    }
    if (segundos < 10) {
        segundos = '0' + segundos;
    }


    pHoras.innerHTML = horas;
    pminutos.innerHTML = minutos;
    psegundos.innerHTML = segundos;
}

function cambiarColor(color){
    let section = document.getElementById("contenedorPrincipal");
    console.log(section);
    if(color == 'pink'){
        section.className = "w-75 mt-5 pink"
    }
    if(color == 'green'){
        section.className = "w-75 mt-5 green"
    }
    if(color == 'purple'){
        section.className = "w-75 mt-5 purple"
    }
    
}

window.setInterval(obtenerFecha, 1000);


//funcion anonima: es ua funcion que de ejecuta solo en un aolo lugar
// window.setInterval(function(){

// }, 300);