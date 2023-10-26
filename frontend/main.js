// get
$(document).ready(function() {
    // Realiza la petición GET
    $.get('http://localhost:3000/movies?token=123', function(movies) {
        // Itera a través de los usuarios obtenidos
        movies.forEach(function(movie) {
            // Se crea una fila en la tabla para cada usuario
            var row = '<tr><td>' + movie.name + '</td><td>' + movie.synopsis + '</td><td>' + movie.genre + '</td><td>' + movie.duration +'</td></tr>';
            $('#movie-table tbody').append(row);
        });
    });
});

// post
$(document).ready(function() {
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
            url: 'http://localhost:3000/movies',
            method: 'POST',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                // Procesa la respuesta del servidor (puede ser la confirmación de la película agregada)
            },
            error: function(error) {
                // Maneja errores si los hay
            }
        });
    });
});