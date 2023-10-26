const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

const rutas = require('./routes');

const app = express();

app.use('', rutas);

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
}));

app.get('/movies', (req, res) => {
    const token = req.query.token; // Accede al parámetro token desde la URL
    // Realiza las acciones necesarias con el token
    res.send('La solicitud a /movies fue exitosa.');
});




const mongoUrl = 'mongodb+srv://temp_user:hbQ2TrDsGwZ45CkS@cluster0.rwnosv0.mongodb.net/info?retryWrites=true&w=majority'

mongoose.connect(mongoUrl).then(() =>{
    app.listen(3000, () =>{
        console.log('app is running...')
    });
}).catch(err => {
    console.log('No se pudo conectar a la base de datos', err);
})