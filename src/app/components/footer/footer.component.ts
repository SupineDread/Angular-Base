import { WebsocketService } from './../../services/websocket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sockets-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public wsService: WebsocketService
  ) { }

  ngOnInit() {
  }

}
