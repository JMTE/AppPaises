import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  private apiUrl:string="https://restcountries.eu/rest/v2"

  //Inyectamos el servicio httpClient, recordemos importarlo en los modulos
  constructor( private http:HttpClient) { }

  buscarCapital(termino: string):Observable<Country[]>{


    const url= `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url);
  }

}
