const express = require('express');
const mongoose = require('mongoose');
const app = express();
const puerto = 3000;

mongoose.connect('mongodb://db:27017/docker-node-mongo', { useNewUrlParser: true })
    .then(() => console.log('Servidor conectado a MongoDB'))
    .catch(err => console.log('Error' + err));

const Producto = mongoose.model('Producto', { nombre: String, precio: Number });

app.get('/', (req, res) => {
    const n = Math.floor(Math.random() * 10000) + 1;
    const registro = new Producto({ nombre: `Producto ${n}`, precio: n });
    registro.save().then(() => console.log('Producto 1 agregado exitosamente'));

    res.send('Registro guardado exitosamente');
    
});

app.get('/registros', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Producto.find({}, (error, data) => {
        if(error){
            res.send(error);
        }else{
            res.send(data);
        }
    })
});

app.listen(puerto, () => {
    console.log(`Servidor ejecutándose en el puerto ${puerto}`);
});