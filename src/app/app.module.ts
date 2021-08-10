import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { CompartidosModule } from './compartidos/compartidos.module';

import { AppRoutingModule } from './app-routing,module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PaisModule, CompartidosModule, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
