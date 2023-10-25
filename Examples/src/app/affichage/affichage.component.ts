import { Component, OnInit } from '@angular/core';
import { TransfertDataService } from '../transfert-data.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.scss']
})
export class AffichageComponent {
  public data: string = '';
  constructor( private monService: TransfertDataService) { }

  getData(): void {
    this.data = this.monService.getData();
}
}
