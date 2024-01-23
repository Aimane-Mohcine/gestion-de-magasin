import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  constructor(private http:HttpClient) { }


  post(vente:any){

    return this.http.post('http://localhost:8888/VENTE-SERVICE/ventes',vente)

  }
}
