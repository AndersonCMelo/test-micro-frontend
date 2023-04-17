import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonMaterialComponent } from './button-material.component';

@NgModule({
  declarations: [
    // ButtonComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [
    ButtonMaterialComponent
  ]
})
export class ButtonMaterialModule { }
