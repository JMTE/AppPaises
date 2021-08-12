import { Component} from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent {

  constructor() { }


  terminoBusqueda:string="";

  buscar(){

    console.log("hola mundos");
    
  }
  

}
