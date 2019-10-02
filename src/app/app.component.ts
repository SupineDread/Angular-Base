import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';

@Component({
  selector: 'sockets-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Sockets basic';

  constructor(
    private wsService: WebsocketService,
  ) {}

  ngOnInit() {
  }

}
