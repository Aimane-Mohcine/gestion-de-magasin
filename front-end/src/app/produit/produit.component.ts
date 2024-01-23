import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProduitService} from "../services/produit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit{

  produits : any;
  constructor(private  http:HttpClient,private  service:ProduitService,public router:Router) {
  }
  ngOnInit() {

    this.http.get("http://localhost:8888/PRODUIT-SERVICE/produits").subscribe(
      {
        next : value => {
          this.produits=value;
        },
        error: err => {
          console.log(err)
        }
      }
    )
  }
send (id:any){

    this.service.send(id);
  this.router.navigate(['/acheter']);

}

send2(id:number){
  this.service.send(id);
  this.router.navigate(['/updateProduir']);

}



}
