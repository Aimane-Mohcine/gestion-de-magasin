import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AchteurService {


  id:any;
  constructor(private http:HttpClient) { }

  send(a:any){
    this.id=a;
  }

      getbyid(){

    return this.http.get('http://localhost:8888/ACHTEUR-SERVICE/achteurs/'+this.id)
      }

      update(achteur:any){

      return this.http.put('http://localhost:8888/ACHTEUR-SERVICE/achteurs/'+this.id,achteur)
      }

      post(achteur:any){

        return this.http.post('http://localhost:8888/ACHTEUR-SERVICE/achteurs',achteur)


      }

      get(){
    return this.http.get('http://localhost:8888/ACHTEUR-SERVICE/achteurs');
      }
}
