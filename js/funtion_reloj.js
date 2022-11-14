$(document).ready(function inicio_reloj() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>A.M</span>" : "<span>P.M</span>";
    hr = (hr == 0) ? hr - 12 : hr;
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    hr = $("#hora").val();
    min = $("#minutos").val();
    sec = $("#segundos").val();
    ap = $("#ampm").val();
    var tiempo = setTimeout(function(){inicio_reloj()},500);
    console.log(hr," ",min," ",sec)
});
function checkTime(i){
    if(i < 10){
        i = "0" + i;
    }
    return i; 
}
