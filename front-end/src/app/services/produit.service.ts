import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  id:any;
  constructor(private http:HttpClient) { }

  send(a:any){
    this.id=a;
  }

  getbyid(){

    return this.http.get('http://localhost:8888/PRODUIT-SERVICE/produits/'+this.id)


  }

  update(produit:any){

    return this.http.put('http://localhost:8888/PRODUIT-SERVICE/produits//'+this.id,produit)

  }

    delete(){

      return this.http.delete('http://localhost:8888/PRODUIT-SERVICE/produits/'+this.id)

    }


  post(produit:any){
    return this.http.post('http://localhost:8888/PRODUIT-SERVICE/produits',produit)
  }

}
