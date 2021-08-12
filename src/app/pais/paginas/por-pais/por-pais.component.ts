import { Component} from '@angular/core';
import { PaisService } from '../../servicios/pais.service';
import {  Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  terminoBusqueda:string=""

  hayError:boolean=false;

  paises:Country[]=[];

  //Inyectamos nuestro servicio
  constructor(private PaisService:PaisService) { }

  buscar(termino:string){
    this.hayError=false;
    this.terminoBusqueda=termino;
    

    

    this.PaisService.buscarPais(this.terminoBusqueda).subscribe( (paises)=>{


      this.paises=paises;

      
      console.log(paises);},(error)=>{

        this.hayError=true;

        this.paises=[];
       
        
        
      
    })


    
  }
}
