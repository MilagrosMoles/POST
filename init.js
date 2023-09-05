document.getElementById('boton').addEventListener('click', function (event) {
    event.preventDefault(); // sirve para prevenir el envío predeterminado del formulario

    // obtener los valores del formulario
    var nombre = document.getElementById('name').value;
    var apellido = document.getElementById('apellido').value;
    var fechaNacimiento = document.getElementById('date').value;

    // crea un objeto Json
    var datos = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };
  
    // utilizo fetch para enviar una solicitud POST
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })

    .then(response => response.json()) // Convertir la respuesta del servidor a JSON

    //Si se manda bien muestra "registro exitoso..." y sino muestra el error
    .then(responseData => {
        console.log(responseData);
        alert("Registro exitoso.");
    })
    .catch(error => {
        console.log(error);
        alert("Hubo un error al enviar la información.");
    });
});