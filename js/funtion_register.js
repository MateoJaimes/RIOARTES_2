var array;

function register(){
    array = [
        {username: "Mateo", password:"1234"},
        {username: "Maryit", password:"5678"},
        {username: "Maria", password:"4321"},
    ]
}

function validar_usuario(){
    var nombre = $("#username").val();
    var contrasena = $("#password").val();
    for (let i = 0; i <= array.length; i++){
        if (nombre==array[i].username && contrasena==array[i].password){ 
            Swal.fire({
                icon: 'success',
                title: 'Bienvenid@, '+nombre,
                text: 'Something went wrong!',
                footer: '<a href="">Tienes algún problema?</a>'
            })
            break;
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario Incorrecto!',
                footer: '<a href="">REGISTRATE</a>'
            })
        }
    }
}
