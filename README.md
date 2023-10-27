# Movies-API

Esta tarea consiste en crear las aplicaciones tanto del back (api) como del front (UI) para crear y listar películas. 

Backend:

Se deberá crear un API implementando MVC
El API debe definir las siguientes rutas:
GET /movies
POST /movies
La película consiste en el siguiente schema:
name: texto, requerido
synopsis: texto, requerido
genre: texto, requerido
duration: numero, requerido
director: texto, requerido
actors: texto, opcional (lista de actores separada por comas)
El API se debe conectar a la base de datos mediante Mongoose
Frontend:

El front consiste en dos páginas:
Listado de películas
Creación de películas
Index.html deberá mostrar la lista de las películas
Al cargar la página debe realizar la consulta al endpoint de /movies y listar las películas que se encuentren en la base de datos
Si no existen películas, mostrar el mensaje correspondiente
Debe tener un mecanismo para navegar entre ambas páginas
El formulario para crear una película debe incorporar los campos necesarios de acuerdo al schema definido
Al realizar el submit del formulario, deberá enviar los datos mediante POST al API
Al confirmar la creación de la película, deberá re-dirigir a la lista de películas
Debe mostrar un mensaje indicando que se creó correctamente
En caso de error, deberá mostrar un mensaje de error 
 

Formato de entrega:

Crear un repositorio público en Github para la tarea
Subir los cambios a la rama principal del repositorio
Compartir la URL del repositorio
 

A considerar:

El diseño (HTML, CSS) de la página es libre, sin embargo se tomará en cuenta para la calificación. 
