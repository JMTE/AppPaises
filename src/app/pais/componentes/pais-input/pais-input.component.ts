import { Component, EventEmitter, Output, OnInit, Input} from '@angular/core';

import { Subject } from 'rxjs';
import { CapitalService } from '../../servicios/capital.service';

import{debounceTime} from "rxjs/operators"

import { PaisService } from '../../servicios/pais.service';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{

  constructor() { }
  
  //vamos a crear el evento para que funcionen el buscar, el evento que vamos a crear es de tipo string (termino)
  @Output() onEnter: EventEmitter<string>= new EventEmitter();

  //Vamos a hacer el DebounceTime para que cuando escribamos algo, nos vaya reconociendo el texto y resetee el error

  @Output() onDebounce: EventEmitter<string>=new EventEmitter(); //se va a emitir cuando la persona deja de escribir


  @Input() placeholder:string="";
  
  debouncer:Subject<string>=new Subject() //vamos a hacer un observable
  
  
  terminoBusqueda:string="";

 

  ngOnInit() {
    //nos subscribimos al debouncer

    //no te suscribas al valor hasta que que el observable deje de emitir valores por 300 ms
    this.debouncer.pipe(debounceTime(300)).subscribe(valor=>{

      this.onDebounce.emit(valor)
    })
  }

  buscar(){

    this.onEnter.emit(this.terminoBusqueda);

    
  }

  teclaPresionada(){

    // cada vez que escriba un valor va a llamar al next que esta subscrito en el oninit que recibe el 
    // nuevo valor

    this.debouncer.next(this.terminoBusqueda);
  }


  

}


