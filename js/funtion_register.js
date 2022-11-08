$(document).ready(function(){
    $("#username").validate({
        rules:{
            username: {required:true, minlength:3, maxlength:10}
        },
        messages:{
            username:{
                required:"EL CAMPO NOMBRE ES REQUERIDO",
                minlength:"DEBE TENER MINIMO 3 DIGITOS"
            }
        }
    });
});

function mensaje_bienvenida(){
    var nombre = $("#username").val();
    let arraynombre=nombre.split(" ");
    Swal.fire({
        icon: 'success',
        title: 'Bienvenido, '+arraynombre[0],
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
    })

}