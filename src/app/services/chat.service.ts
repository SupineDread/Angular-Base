import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private wsWervice: WebsocketService
  ) { }

  sendMessage(mensaje: string) {
    const payload = {
      from: this.wsWervice.getUsuario().nombre,
      content: mensaje
    };
    this.wsWervice.emit('mensaje', payload);
  }

  getMessages() {
    return this.wsWervice.listen('mensaje-nuevo');
  }

}
