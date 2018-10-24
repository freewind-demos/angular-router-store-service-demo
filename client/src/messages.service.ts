import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export default class MessagesService {

  constructor(private http: HttpClient) {}

  async fetchMessages(): Promise<string[]> {
    console.log('> fetchMessages');
    return await this.http.get<string[]>(`${baseUrl}/messages`).toPromise();
  }

  async addMessage(message: string) {
    console.log('> addMessage:', message);
    await this.http.post(`${baseUrl}/messages`, {message}, {responseType: 'text'}).toPromise();
  }

}
