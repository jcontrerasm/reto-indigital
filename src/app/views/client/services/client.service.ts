import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl: string;

  constructor(private _hhtp: HttpClient) {
    this.baseUrl = 'https://reto-indigital.firebaseio.com';
  }

  public registerClient(client: Client) {
    return this._hhtp.post(`${this.baseUrl}/customers.json`, client);
  }

  public getClients() {
    return this._hhtp.get(`${this.baseUrl}/customers.json`)
      .pipe(
        map(this.listClient)
      );
  }

  private listClient(clientObj: object) {
    const clients: Array<Client> = [];
    Object.keys(clientObj).forEach(key => {
      const client: Client = clientObj[key];
      client['id'] = key;
      clients.push(client);
    });
    return clients;
  }

  public getClient(clientId: string): any {
    return this._hhtp.get(`${this.baseUrl}/customers/${clientId}.json`);
  }
}
