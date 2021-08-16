import { Component } from '@angular/core';

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

  regiones:string[]= ['africa', 'america', 'asia', 'europe', 'oceania'];

  regionActiva:string="";


  constructor() { }


  activarRegion(region:string){

    this.regionActiva=region;

    //Hacer el llamado al servicio para traer los paises por esa region


  }
  
}
