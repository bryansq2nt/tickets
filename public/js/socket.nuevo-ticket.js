// Comando para establecer la conexion


var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', () => {

    console.log('Conectado al servidor');

});

socket.on('disconnect', () => {
    console.log('Desconectado al servidor');

});

socket.on('estadoActual', (ticket) => {

    label.text(ticket.actual);
});


$('button').on('click', () => {
    socket.emit('siguienteTicket', null, (siguienteTicket) => {

        label.text(siguienteTicket);
    });
});