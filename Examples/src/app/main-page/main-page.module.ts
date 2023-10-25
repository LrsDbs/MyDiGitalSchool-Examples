import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { AffichageComponent } from '../affichage/affichage.component';
import { MainPageComponent } from './main-page.component';



@NgModule({
  declarations: [
    FormComponent,
    AffichageComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      MainPageComponent
    ]
})
export class MainPageModule { }
