import {Component, OnInit} from '@angular/core';
import Store from '../../store';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements OnInit {

  constructor(private store: Store) { }

  newMessage: '';

  async ngOnInit() {
    await this.store.init();
  }

  async submitNewMessage() {
    await this.store.createMessage(this.newMessage);
    this.newMessage = '';
  }

}
