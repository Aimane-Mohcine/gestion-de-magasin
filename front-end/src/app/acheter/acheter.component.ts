import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProduitService} from "../services/produit.service";
import {Router} from "@angular/router";
import {AchteurService} from "../services/achteur.service";
import {VenteService} from "../services/vente.service";
import {NotificationService} from "../services/notification.service";

@Component({
  selector: 'app-acheter',
  templateUrl: './acheter.component.html',
  styleUrl: './acheter.component.css'
})
export class AcheterComponent implements OnInit{

  produits : any;
  nom =" ";
  ville =" ";

  acheteur: { nom?: string, ville?: string, marque?: string } = {};
  vente: { idAchteur?: number, idProduit?: number } = {};
  t_achteurs: any;
  constructor(private  http:HttpClient,private  service:ProduitService,public router:Router, private serviceAchteur:AchteurService,
              private serviceVente:VenteService,public serviceNotification:NotificationService) {
  }
  ngOnInit() {

    this.service.getbyid().subscribe(
      {

        next: value => {
          this.produits=value;
        },
        error: err => {
          console.log(err);
        }
      }
    )

  }

  submitAchatForm(){

this.acheteur.nom=this.nom;
this.acheteur.ville=this.ville;
    this.serviceAchteur.post(this.acheteur).subscribe(
      {
        next : value => {

           this. get();
        },
        error: err => {
          console.log();
        }
      }
    )

  }
  get(){

    this.serviceAchteur.get().subscribe(
      {
        next : value => {

          this.t_achteurs=value;
          console.log("voila -------"+this.t_achteurs.length);

          console.log("voila -------" + this.t_achteurs[0]);

          if (this.t_achteurs.length > 0) {
            // Supposons que la propriété que vous souhaitez comparer s'appelle "id"
            let plusGrandElement = this.t_achteurs[0];

            for (let i = 1; i < this.t_achteurs.length; i++) {
              if (this.t_achteurs[i].id > plusGrandElement.id) {
                plusGrandElement = this.t_achteurs[i];
              }
            }

            console.log("Le plus grand élément a l'id :", plusGrandElement.id);
            this.add( plusGrandElement.id,this.service.id);

          } else {
            console.log("Le tableau d'acheteurs est vide.");
          }
       //   this.add(this.t_achteurs.length,this.service.id);

        },
        error: err => {
          console.log(err);
        }
      }
    )

  }

  add(ida:number,idp:number){

    this.vente.idAchteur=ida;
    this.vente.idProduit=idp;

    this.serviceVente.post(this.vente).subscribe({

      next: value => {

        this.updateProduit(this.service.id);
      },
      error: err => {
        console.log(err)
      }
    })



  }

  updateProduit(id: number){
      this.produits.quantie= this.produits.quantie-1;

      this.service.update(this.produits).subscribe(
        {
          next : value => {
            alert("vous avez acheter ce produit");
            this.serviceNotification.getNotification();
            this.router.navigate(['/produit']);

          },
          error : err => {

            console.log(err);
          }
        }
      )
  }
}
