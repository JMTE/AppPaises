import { Component} from '@angular/core';
import { PaisService } from '../../servicios/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class PorPaisComponent  {

  terminoBusqueda:string=""

  hayError:boolean=false;
  
  paises:Country[]=[];

  paisesSugeridos:Country[]=[];

  mostrarSugerencias:boolean=false;

  

  //Inyectamos nuestro servicio
  constructor(private PaisService:PaisService) { }

  buscar(termino:string){
    this.hayError=false;
    this.terminoBusqueda=termino;

    this.mostrarSugerencias=false;
    

    

    this.PaisService.buscarPais(this.terminoBusqueda).subscribe( (paises)=>{


      this.paises=paises;

      
      console.log(paises);},(error)=>{

        this.hayError=true;

        this.paises=[];
       
        
        
      
    })


    
  }

  sugerencias(termino:string){

    this.hayError=false;
    this.terminoBusqueda=termino;
    this.mostrarSugerencias=true;
    //Crear sugerencias


    this.PaisService.buscarPais(termino).subscribe(
      
      
      paises =>{


      this.paisesSugeridos=paises.splice(0,5) //para que solo muestre 5 sugerencias


    },
      (error)=>{ 
        this.paisesSugeridos=[] //Para que cuando se siga introduciendo mal el numero no se quede la sugerencia en la pantalla
      })


  }

  buscarSugerido(termino:string){

    this.buscar(termino);

   


  }
}
