document.addEventListener("DOMContentLoaded", function() {
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
        const desiredContainerHeight = tbody.clientHeight + 200; // 200 en lugar de 120 para que coincida con tu comentario

        // Aplica la altura deseada al contenedor
        const container = document.querySelector(".container");
        container.style.height = `${desiredContainerHeight}px`;
    });

    //POST

    const moviesHTML = movies.map((movie) => `
          <div class="movie">
          <p><strong>Pelicula:</strong>${movie.name}</p>
            <p><strong>Sinopsis:</strong> ${movie.synopsis}</p>
            <p><strong>Genero:</strong> ${movie.genre}</p>
            <p><strong>Duracion:</strong> ${movie.duration}</p>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Actores:</strong> ${movie.actors}</p>
          </div>
        `).join('');
  
        // Insertar la lista de películas en el elemento con id "movieList"
        movieList.innerHTML = moviesHTML;
      }).catch((error) => {console.error('Error al obtener las películas:', error);
      });


      
    const sinopsisForm = document.getElementById('sinopsisForm');

    sinopsisForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const formData = new FormData(sinopsisForm);

        // Convierte los datos del formulario en un objeto
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Realiza una solicitud POST al servidor
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            mode: "cors",
        })
        .then((response) => response.json())
        .then((response) => {
            console.log('Película guardada:', response);
            // Puedes redirigir al usuario a la página de inicio o hacer otra acción
        })
        .catch((error) => {
            console.error('Error al guardar la película:', error);
        });
});