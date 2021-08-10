import { Component} from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  terminoBusqueda:string=""

  constructor() { }

  buscar(){

    console.log(this.terminoBusqueda);
    
  }
}
