const Movie = require("./../models/movies")

class MoviesController {

ver(req, res) {
    const id = req.params.id;
    const movie = ids[id];

    if(movie) {
        res.send(movie);
    } else {
        res.sendStatus(404);
    }  
}

listar(req, res) {
    Movie.find().then(response => {
        console.log('Respuesta', response);
        res.send(response);
    }).catch(e => {
        res.sendStatus(500);
        console.log('Error: ', e);
    });
}

crear(req, res) {
    // Recopila los datos del formulario del cuerpo de la solicitud
    const formData = req.body;

    // Inserta los datos en la base de datos (ejemplo con MongoDB)
    // Aquí deberías usar el módulo de MongoDB o el sistema de gestión de bases de datos que estés utilizando
    const db = client.db('nombreDeTuBaseDeDatos');
    const collection = db.collection('nombreDeTuColección');
    
    collection.insertOne(formData, (error, result) => {
        if (error) {
            res.status(500).json({ message: 'Error al insertar en la base de datos' });
        } else {
            res.status(201).json({ message: 'Película agregada con éxito' });
        }
    });
}

editar(req, res) {
    res.send(movies[0]);
}

eliminar(req, res) {
    res.send(movies[0]);
}

}

module.exports = new MoviesController();