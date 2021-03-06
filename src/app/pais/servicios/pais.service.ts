import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string="https://restcountries.eu/rest/v2"

  get httpParams(){

    return new HttpParams().set('fields','name;capital;alpha2Code;flag;population' )
  }

  //Inyectamos el servicio httpClient, recordemos importarlo en los modulos
  constructor( private http:HttpClient) { }

  buscarPais(termino: string):Observable<Country[]>{


    const url= `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url, {params:this.httpParams});
  }

  getPaisCodigo(id: string):Observable<Country>{


    //El codigo del pais nos lo devuelve como alpha y solo nos retorna un pais, no un array

    const url= `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url, {params:this.httpParams});
  }

  buscarPaisesContinente(continente:string):Observable<Country[]>{

    //El codigo del pais nos lo devuelve como region y nos retorna un array de paises

    

    const url= `${this.apiUrl}/region/${continente}`
    return this.http.get<Country[]>(url, {params:this.httpParams});


  }



}
