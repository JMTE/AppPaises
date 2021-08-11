import { Component} from '@angular/core';
import { PaisService } from '../../servicios/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  terminoBusqueda:string=""

  hayError:boolean=false;

  //Inyectamos nuestro servicio
  constructor(private PaisService:PaisService) { }

  buscar(){
    this.hayError=false;

    console.log(this.terminoBusqueda);

    this.PaisService.buscarPais(this.terminoBusqueda).subscribe( (respuesta)=>{

      console.log(respuesta);},(error)=>{

        this.hayError=true;
       
        
        
      
    })


    
  }
}
