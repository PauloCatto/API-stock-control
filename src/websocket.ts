import { Server } from "socket.io";
import { Server as HttpServer } from "http";

export let io: Server;

export function setupWebsocket(httpServer: HttpServer) {
  io = new Server(httpServer, {
    cors: {
      origin: "*", // Em produção, você pode restringir isso para a URL do seu frontend
      methods: ["GET", "POST", "PUT", "DELETE"]
    },
  });

  io.on("connection", (socket) => {
    console.log(`Cliente conectado no WebSocket: ${socket.id}`);

    socket.on("disconnect", () => {
      console.log(`Cliente desconectado: ${socket.id}`);
    });
  });
}
