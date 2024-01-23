import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProduitService} from "../services/produit.service";
import {Router} from "@angular/router";
import {AchteurService} from "../services/achteur.service";
import {VenteService} from "../services/vente.service";
import {NotificationService} from "../services/notification.service";

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrl: './update-produit.component.css'
})
export class UpdateProduitComponent implements OnInit{


  produit: { marque?: string, prix?: number, quantie?: string } = {};

  constructor(private  http:HttpClient,private  service:ProduitService,public router:Router,
              private serviceAchteur:AchteurService,private serviceVente:VenteService,public serviceNotification:NotificationService ) {}

  ngOnInit() {

    this.service.getbyid().subscribe(
      {

        next: value => {
          this.produit=value;
        },
        error: err => {
          console.log(err);
        }
      }
    )
  }



  updateProduit(){

    this.service.update(this.produit).subscribe(
      {
        next: value => {
          alert("vous avez modifier ce produit");
          this.router.navigate(['/produit']);

        }
      }
    )
  }
delete(){
  if (confirm("Are you sure?")) {

    this.service.delete().subscribe(
      {
        next: value => { this.serviceNotification.getNotification();
          alert("vous avez supprimer ce produit");
          this.router.navigate(['/produit']);
        },
        error : err => {
          console.log(err)
        }
      }
    )}
}

  ajouterProduit(){

    this.router.navigate(['/AjouterProduit']);

  }
}
