import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { CompartidosModule } from './compartidos/compartidos.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PaisModule, CompartidosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
