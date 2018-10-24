import MessagesService from './messages.service';
import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class Store implements OnInit {

  private _messages: string[] = [];

  constructor(private messagesService: MessagesService) {}

  get messages() {
    console.log('> Store.messages');
    return this._messages;
  }

  async ngOnInit(): void {
    console.log('> Store.ngOnInit');
    await this.init();
  }

  async init() {
    console.log('> Store.init');
    const messages = await this.messagesService.fetchMessages();
    console.log('messages', messages);
    this._messages = messages;
  }

  async createMessage(message: string) {
    console.log('> Store.createMessage');
    await this.messagesService.addMessage(message);
    await this.init();
  }

}
