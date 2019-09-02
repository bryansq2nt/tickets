const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');


const ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket(),
        ultimosCuatro: ticketControl.getUltimosCuatro()
    });

    client.on('siguienteTicket', (data, callback) => {
        let siguiente = ticketControl.siguienteTicket();
        console.log(`Siguiente ticket: ${siguiente}`);
        callback(siguiente);
    });


    client.on('atenderTicket', (data, callback) => {
        if (!data.escritorio) {
            return callback({
                err: true,
                mensaje: 'El escritorio es necesario'
            })
        }

        let atenderTicket = ticketControl.atenderTicket(data.escritorio);

        callback(atenderTicket);

        // actualizar / notificar cambios en los ULTIMOS 4

        client.broadcast.emit('actualizar', {
            ultimosCuatro: ticketControl.getUltimosCuatro()

        });

    });



});