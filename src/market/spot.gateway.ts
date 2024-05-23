import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class SpotGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() io: Server;

  afterInit(server: Server) {
    // console.log('Server initialized: ', server);
  }
  handleConnection(client: any, ...args: any[]) {
    const { sockets } = this.io.sockets;

    console.log(`Client id: ${client.id} connected`);
    console.log(`Number of conneced clients: ${sockets.size}`);
  }
  handleDisconnect(client: any) {
    console.log(`Client id: ${client.id} disconnected`);
  }

  @SubscribeMessage('ping')
  handleMessage(@ConnectedSocket() client: Socket, data: any) {
    console.log(`Message recieved from clinet id: ${client.id}`);
    console.log(`Payload: ${data}`);
    return {
      event: 'pong',
      data: 'Wrong data that will make the test fail',
    };
  }
}
