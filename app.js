const express = require('express');
const emailRoutes = require('./routes/email')
const dotenv = require('dotenv')

dotenv.config()

class Server {

    app;
    port;
    apiPaths = {
        email: '/api/email',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '7000';

        // Métodos iniciales
        this.middlewares();
        this.routes();
    }

    dbConnection = async () => {
        try {
            await dbConnection()
        } catch (error) {
            console.log(error)
            throw new Error('Error al iniciar mongo');

        }
    }

    middlewares() {
        // Lectura del body
        this.app.use(express.json());

        // Carpeta pública
        this.app.use(express.static('public'));
    }


    routes() {
        this.app.use(this.apiPaths.email, emailRoutes)
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }

}

module.exports = Server;