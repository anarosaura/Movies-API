const router = require('express').Router();
const authMiddleware = require('./../src/middlewares/auth');
const usersController = require('./../src/controllers/movies');

router.use('/movies', authMiddleware);

router.get('/movies', usersController.listar);
router.get('/movies/:id', usersController.ver);
router.post('/movies', usersController.crear);
router.put('/movies/:id', usersController.editar);
router.delete('/movies/:id', usersController.eliminar);

module.exports = router;