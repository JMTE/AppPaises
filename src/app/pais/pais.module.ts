import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './paginas/por-capital/por-capital.component';
import { PorPaisComponent } from './paginas/por-pais/por-pais.component';
import { PorContinenteComponent } from './paginas/por-continente/por-continente.component';
import { VerPAisComponent } from './paginas/ver-pais/ver-pais.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorContinenteComponent,
    VerPAisComponent
  ],
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  exports:[
    PorCapitalComponent,
    PorPaisComponent,
    PorContinenteComponent,
    VerPAisComponent
  ]
})
export class PaisModule { }
