import dotenv from "dotenv";
dotenv.config();

const { default: app } = await import('./src/app.js')
const { default: connectToDb } = await import('./src/config/database.js')
const { initSocket } = await import('./src/sockets/server.socket.js');
import http from 'http';

const server = http.createServer(app);
initSocket(server);
connectToDb()

server.listen(3000 , ()=>{
    console.log("Server connected succesfully...")
})