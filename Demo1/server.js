const express = require('express');
const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
    res.send(`Hola desde NodeJS, la carpeta actual es ${__dirname}`);
});

app.listen(puerto, () => {
    console.log(`Servidor ejecutándose en el puerto ${puerto}`);
});