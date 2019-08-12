import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private clientId: string;
  client: Client;

  constructor(
    private _clienteService: ClientService,
    private _route: ActivatedRoute
  ) {
    this.client = new Client();
  }

  ngOnInit() {
    this.clientId = this._route.snapshot.paramMap.get('id');
    this._clienteService.getClient(this.clientId).subscribe(
      response => this.client = response
    );
  }

}
