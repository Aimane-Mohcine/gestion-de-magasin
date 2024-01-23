import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProduitService} from "../services/produit.service";
import {Router} from "@angular/router";
import {AchteurService} from "../services/achteur.service";
import {VenteService} from "../services/vente.service";

@Component({
  selector: 'app-ajouter-prouduit',
  templateUrl: './ajouter-prouduit.component.html',
  styleUrl: './ajouter-prouduit.component.css'
})
export class AjouterProuduitComponent implements OnInit{


  produit: { marque?: string, prix?: number, quantie?: number } = {};

  constructor(private  http:HttpClient,private  service:ProduitService,public router:Router, private serviceAchteur:AchteurService,private serviceVente:VenteService) {}
ngOnInit() {
  this.produit.prix=0;
  this.produit.quantie=0;
  this.produit.marque="";
}

  ajouterProduit(){

      this.service.post(this.produit).subscribe(

        {
          next : value => {

            alert("vous avez ajouter  le nouveau produit");
            this.produit.prix=0;
            this.produit.quantie=0;
            this.produit.marque="";



          },
          error : err => {
            console.log(err)
          }
        }
      )
  }
}
