
import { NgModule } from "@angular/core";
import { RouterModule,  Routes } from "@angular/router";
import { PorCapitalComponent } from "./pais/paginas/por-capital/por-capital.component";
import { PorContinenteComponent } from "./pais/paginas/por-continente/por-continente.component";
import { PorPaisComponent } from './pais/paginas/por-pais/por-pais.component';
import { VerPAisComponent } from './pais/paginas/ver-pais/ver-pais.component';



const routes: Routes=[

    {   //Ruta principal de la app, primer componente a mostrar al entrar en ella
        path:"",
        component:PorPaisComponent,
        pathMatch:"full"
    },

    {
        path:"continente",
        component:PorContinenteComponent


    },

    {
        path:"capital",
        component:PorCapitalComponent

    },

    {
        path:"pais/:id", //Sera necesario pedir un id para mostrar el pais correspondiente
        component:VerPAisComponent

    },

    {//Cualquier otra direccion

        path:"**",
        redirectTo:""
    }

]

@NgModule({

    imports:[

        RouterModule.forRoot(routes)


    ],

    exports:[

        RouterModule
    ]
})

export class AppRoutingModule{



}