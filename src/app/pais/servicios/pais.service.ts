import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string="https://restcountries.eu/rest/v2"

  //Inyectamos el servicio httpClient, recordemos importarlo en los modulos
  constructor( private http:HttpClient) { }

  buscarPais(termino: string):Observable<Country[]>{


    const url= `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url);
  }

}
