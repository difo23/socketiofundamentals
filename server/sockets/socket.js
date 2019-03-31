const { io } = require('../server');

io.on('connection', (client) => {
	console.log('Usuario Connectado');

	// enviar mensaje desde el server
	client.emit('enviarMensajeServer', { mensaje: 'Bienvenidos' });

	client.on('disconect', () => {
		console.log('Usuario desconectado');
	});

	// escuchar al cliente
	client.on('enviarMensaje', (data, callback) => {
		console.log('cliente mensaje:', data);

		client.broadcast.emit('enviarMensajeServer', data);

		// if (mensaje.nombre === null) {
		// 	callback({ resp: 'Error no enviaste el nombre' });
		// } else {
		// 	callback({ resp: 'Todo Bien!' });
		// }
	});
});
