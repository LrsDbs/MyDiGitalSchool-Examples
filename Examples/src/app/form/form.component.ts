import { Component, OnInit } from '@angular/core';
import { TransfertDataService } from '../transfert-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(
    private monService: TransfertDataService,

) {}

setData(valeur:string): void{
  this.monService.setData(valeur);
}

}
