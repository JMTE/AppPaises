import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaisService } from '../../servicios/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPAisComponent implements OnInit {

  //1- ActivatedRoute viene con todo lo necesario para poder suscribirnos a cambios del url
  constructor(private activatedRoute:ActivatedRoute, private PaisService:PaisService) { }

  ngOnInit(): void {

    // this.activatedRoute.params.subscribe(({id})=>{

    //   //Aqui atrapamos el id del pais

    //   console.log(id);

    //   //A continuacion tenemos que hacer otro observable para traer la informacion del pais 
    //   //Podemos crear otro servicio nuevo o hacer otra funcion en uno de nuestros servicios
    //   //Esta vez vamos a hacer lo segundo

    //   this.PaisService.getPaisCodigo(id).subscribe(pais=>{

    //     console.log(pais);
        
    //   })


      
    // })


    //A CONTINUACION VAMOS A HACER LO MISMO PERO TRABAJANDO CON RXJS Y SWITCHMAP

    this.activatedRoute.params
    .pipe(
      //El switchmap nos permite recibir un observable y devolver otro observable
      switchMap((param)=>this.PaisService.getPaisCodigo(param.id))
    )
    
    .subscribe(respuesta=>{

      console.log(respuesta);
      

    })

  }

}
