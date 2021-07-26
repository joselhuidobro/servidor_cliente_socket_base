
// Servidor Express
const express = require('express');
const app = express();

// Servidor de sockets
const server = require('http').createServer(app);

// Configuracion del socket server
const io = require('socket.io')(server);

// Desplegar el directorio PUBLICO ( sepa que tiene que leer carpeta public)
app.use(express.static(__dirname + '/public') );

io.on('connection', (socket) => { 
 console.log('Cliente conectado:',socket.id);
 socket.emit('mensaje-bienvenida','Bienvenido al servidor');
});
 
server.listen(8080,() => {
    console.log('server corriendo en puerto: 8080');
});
