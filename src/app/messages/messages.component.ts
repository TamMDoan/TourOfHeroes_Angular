import { Component } from '@angular/core';
import { MessageService } from '../services/message/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  /*
  messageService here is PUBLIC because we will be 
  binding this service to html
  */
  constructor(public messageService: MessageService){}
  
}
