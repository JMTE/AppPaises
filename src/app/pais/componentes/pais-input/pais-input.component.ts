import { Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent {

  constructor() { }
  //vamos a crear el evento para que funcionen el buscar, el evento que vamos a crear es de tipo string (termino)
  @Output() onEnter: EventEmitter<string>= new EventEmitter();
  terminoBusqueda:string="";

  buscar(){

    this.onEnter.emit(this.terminoBusqueda);
  }
  

}
