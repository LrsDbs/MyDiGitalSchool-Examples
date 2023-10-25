import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransfertDataService {
  
  public Data: string = '';

  constructor() {}

  getData(): string {
    return this.Data;
  }
  setData(valeur: string): void
  {
    this.Data=valeur;
  }

}
