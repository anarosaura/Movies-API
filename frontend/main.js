// get
$(document).ready(function() {
    // Realiza la petición GET
    $.get('http://localhost:3000/movies?token=123', function(movies) {
        // Itera a través de las películas obtenidas y agrega filas a la tabla
        movies.forEach(function(movie) {
            var row = '<tr><td>' + movie.name + '</td><td>' + movie.synopsis + '</td><td>' + movie.genre + '</td><td>' + movie.duration + '</td><td>' + movie.director + '</td><td>' + movie.actors +'</td></tr>';
            $('#movie-table tbody').append(row);
        });

        // Calcula la altura deseada para el contenedor después de agregar las filas.
        const table = document.getElementById("movie-table");
        const tbody = table.getElementsByTagName("tbody")[0];
        const desiredContainerHeight = tbody.clientHeight + 200; // 120 es la altura de otros elementos dentro del contenedor

        // Aplica la altura deseada al contenedor
        const container = document.querySelector(".container");
        container.style.height = `${desiredContainerHeight}px`;
    });
});


// post
/* $(document).ready(function() {
    $('#movie-form').submit(function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

        // Obtiene los datos del formulario
        const formData = {
            name: $('#name').val(),
            synopsis: $('#synopsis').val(),
            genre: $('#genre').val(),
            duration: $('#duration').val(),
            director: $('#director').val(),
            actors: $('#actors').val().split(', '), // Si los actores se ingresan como una lista separada por comas
        };

        // Realiza la solicitud POST al servidor
        $.ajax({
            url: 'http://localhost:3000/movies?token=123',
            method: 'POST',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                // Procesa la respuesta del servidor (puede ser la confirmación de la película agregada)
                // Puedes agregar aquí lógica para actualizar la tabla de películas si es necesario
            },
            error: function(error) {
                // Maneja errores si los hay
            }
        });
    });
}); */

async function PostThisShit()
{
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtiene los datos del formulario
    const formData = {
        name: document.getElementById("name").value,
        synopsis: document.getElementById("synopsis").value,
        genre: document.getElementById("genre").value,
        duration: document.getElementById("duration").value,
        director:document.getElementById("director").value,
        actors: document.getElementById("actors").value // Si los actores se ingresan como una lista separada por comas
    };

    // Realiza la solicitud POST al servidor
   let response = await fetch('http://localhost:3000/movies?token=123', {
        method: 'POST',
        data: JSON.stringify(formData),
        contentType: 'application/json',
        });
}