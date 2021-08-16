import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../servicios/pais.service';

@Component({
  selector: 'app-por-continente',
  templateUrl: './por-continente.component.html',
  styles: [`

button{
  margin-right:1.5px

  
}
  `
  ]
})
export class PorContinenteComponent{

  continentes:string[]= ['africa', 'americas', 'asia', 'europe', 'oceania'];

  continenteActivo:string="";

  paises:Country[]=[];

  constructor(private PaisService:PaisService) { }


  activarContinente(continente:string){

    if(continente===this.continenteActivo){
      return;
    }

    this.continenteActivo=continente;

    this.paises=[];

    //Hacer el llamado al servicio para traer los paises por esa region

    this.PaisService.buscarPaisesContinente(this.continenteActivo).subscribe( (paises)=>{


      this.paises=paises;
  
      
      console.log(paises);},(error)=>{
  
        
  
        this.paises=[];
       
        
        
      
    })
  
  }

  getClaseCSS(region:string):string{

    // Hacemos este metodo para que el retorno en la seleccion de clases sea mas simplificado
    return (region === this.continenteActivo) ?    'btn-primary' : 'btn-outline-primary'


  }
  
}
