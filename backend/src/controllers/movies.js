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
    res.send(movies[0]);
}

editar(req, res) {
    res.send(movies[0]);
}

eliminar(req, res) {
    res.send(movies[0]);
}

}

module.exports = new MoviesController();