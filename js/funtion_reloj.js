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
    

    hr.innerHTML = horas;
    min.innerHTML = minutos;
    seg.innerHTML = segundos;
    ap.innerHTML = ampm;
},1000);