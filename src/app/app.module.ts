import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonMaterialComponent } from './components/button-material/button-material.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonMaterialComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ButtonComponent,
    ButtonMaterialComponent,
  ]
})
export class AppModule { }
