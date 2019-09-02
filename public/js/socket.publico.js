var socket = io();


var lblTickect1 = $('#lblTicket1');
var lblTickect2 = $('#lblTicket2');
var lblTickect3 = $('#lblTicket3');
var lblTickect4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var lblTickets = [lblTickect1, lblTickect2, lblTickect3, lblTickect4];

var lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];

socket.on('estadoActual', (data) => {
    console.log(data);
    actualizaHtml(data.ultimosCuatro);
});

socket.on('actualizar', (data) => {

    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHtml(data.ultimosCuatro);
});

function actualizaHtml(ultimosCuatro) {
    for (var i = 0; i < ultimosCuatro.length; i++) {
        lblTickets[i].text('Ticket ' + ultimosCuatro[i].numero);
        lblEscritorios[i].text('Esritorio ' + ultimosCuatro[i].escritorio);
    }
}