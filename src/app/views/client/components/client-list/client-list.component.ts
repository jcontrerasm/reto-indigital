import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  ageList: Array<number>;
  average: number;
  standardDeviation: number;

  constructor(private _clientService: ClientService) {
    this.ageList = [];
  }

  ngOnInit() {
    this._clientService.getClients().subscribe(
      response => {
        response.forEach(item => {
          this.ageList.push(item['age']);
        });
        this.average = this.getAverage(this.ageList);
        this.standardDeviation = this.getStandardDeviation(this.ageList, this.average);
      }
    );
  }

  private calculateSum(list: Array<number>): number {
    return list.reduce((prev, next, i) => prev + next);
  }

  private getAverage(list: Array<number>): number {
    return this.calculateSum(list) / list.length;
  }

  private getStandardDeviation(list, average: number): number {
    const listNumbers = list.map(item => {
      return Math.pow(item - average, 2);
    });
    return Math.sqrt(this.calculateSum(listNumbers) / this.ageList.length);
  }
}
