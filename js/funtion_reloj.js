var hr = document.querySelector('.hora');
var min = document.querySelector('.minutos');
var seg = document.querySelector('.segundos');
var ap = document.querySelector('.ampm')

const actualizar_hora = setInterval(function(){
    var date = new Date();
    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();
    let ampm;
    
    if (horas < 12){
        ampm = "AM";
    }else{
        ampm = "PM";
    }
    
    if (horas > 12){
        horas = horas - 12;
    }
    if (horas < 10){
        horas = "0"+horas;
    }
    if (minutos < 10){
        minutos = "0"+minutos;
    }
    if (segundos < 10){
        segundos = "0"+segundos;
    }

    hr.innerHTML = horas;
    min.innerHTML = minutos;
    seg.innerHTML = segundos;
    ap.innerHTML = ampm;

},1000);