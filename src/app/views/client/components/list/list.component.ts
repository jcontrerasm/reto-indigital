import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  clients: Array<Client>;

  constructor(private _clientService: ClientService) { }

  ngOnInit() {
    this._clientService.getClients().subscribe(
      response => this.clients = response
    );
  }

}
