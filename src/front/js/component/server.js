// server.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001; // El puerto puede ser diferente, ajústalo según sea necesario

// Configura CORS para permitir solicitudes desde el dominio de tu cliente
app.use(cors({
    origin: 'https://refactored-guide-pjj4vj7x45xphrq69-3000.app.github.dev', // Cambia esto al origen de tu cliente
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type'
}));

app.use(express.json()); // Para analizar el cuerpo de la solicitud JSON

app.post('/registro', (req, res) => {
    // Aquí puedes manejar el registro, guardar en base de datos, etc.
    console.log('Datos del registro:', req.body);
    res.json({ message: 'Usuario registrado', data: req.body });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
