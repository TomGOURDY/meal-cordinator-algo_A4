import {createServer} from 'http'
import {Server} from 'socket.io'

const httpServer = createServer();
const io = new Server(httpServer, {cors:{origin:'*'}});

const hostname = 'localhost';
const port = 3001

const users = []

io.on("connection", (socket) => {
    console.log('=> connexion' , socket.id);

    socket.on('disconnect', ()=> {
        console.log('=> disconnect' , socket.id);
    })

    socket.on('changeArrivee', ()=> {
        console.log('=> changeArrivee', socket.id)
    })
  });
httpServer.listen(port);