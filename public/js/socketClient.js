var socket = io();

// los on son para escuchar
socket.on('connect', function() {
	console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
	console.log('Perdimos la conexion con el servidor');
});

// los emits son para enviar infomacion
socket.emit(
	'enviarMensaje',
	{
		nombre: 'null',
		apellido: 'Perez'
	},
	function(mensaje) {
		console.log('Server response', mensaje);
	}
);

//escuchar informacion
socket.on('enviarMensajeServer', (mensaje) => {
	console.log('server mensaje:', mensaje);
});
