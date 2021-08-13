import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';

import { CapitalService } from '../../servicios/capital.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

 

  terminoBusqueda:string=""

  hayError:boolean=false;
  
  //Recordemos que country es un objeto array que contiene informacion como es name,capital,etc
  paises_capital:Country[]=[];

  

  //Inyectamos nuestro servicio
  constructor(private CapitalService:CapitalService) { }


buscarCapital(termino:string){
  this.hayError=false;
  this.terminoBusqueda=termino;
  

  

  this.CapitalService.buscarCapital(this.terminoBusqueda).subscribe( (capital)=>{


    this.paises_capital=capital;

    
    console.log(capital);},(error)=>{

      this.hayError=true;

      this.paises_capital=[];
     
      
      
    
  })


  
}




 

}
