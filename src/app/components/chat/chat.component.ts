import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sockets-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  public texto = '';
  messagesSubscription: Subscription;
  element: HTMLElement;
  messages: Array<any> = [];

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.element = document.getElementById('chat-mensajes');

    this.messagesSubscription = this.chatService.getMessages().subscribe(msg => {
      this.messages.push(msg);

      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 50);

    });
  }

  ngOnDestroy() {
    this.messagesSubscription.unsubscribe();
  }

  sendMessage() {
    if (this.texto.trim().length === 0) { return; }
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }

}
