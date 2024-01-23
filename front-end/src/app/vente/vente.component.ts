import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AchteurService} from "../services/achteur.service";
import {VenteService} from "../services/vente.service";

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrl: './vente.component.css'
})
export class VenteComponent implements  OnInit{


ventes : any;

  constructor(public router:Router,private  http:HttpClient,private serviceVente:VenteService,private  serviceAchteur:AchteurService) {}
    vente:any;
  idAchteur:any;
  ngOnInit() {


    this.http.get("http://localhost:8888/VENTE-SERVICE/ventes").subscribe(
      {

          next : value => {
            this.ventes=value;

          },
        error : err => {
            console.log(err)
        }
      }

)


  }

    getVente(id:any){

        this.http.get('http://localhost:8888/VENTE-SERVICE/ventes/'+id).subscribe(
          {
            next : value => {

                  this.vente=value;
              this.idAchteur=this.vente.idAchteur;
              console.log("idACHTEUR : "+ this.idAchteur);

              this.supprimer(this.vente.id);

            }
          }
        )
    }
  supprimer(id:number){
    if (confirm("Are you sure?")) {

          this.supprimerAchteur();

      this.http.delete('http://localhost:8888/VENTE-SERVICE/ventes/'+id).subscribe(
        {
          next: value => {

            alert("vous aves supprimer le vente");
            this.refresh();
          },
          error: err => {
            console.log(err)
          }

      }

    )}}


  supprimerAchteur(){

    this.http.delete('http://localhost:8888/ACHTEUR-SERVICE/achteurs/'+this.idAchteur).subscribe(
      {
        next: value => {
      console.log("--------------------------------------------------------")
        },
        error: err => {
          console.log(err)
        }

      }

    )}



  send(id:any){

    this.serviceAchteur.send(id);
    this.router.navigate(['/UpdateAchteur']);

  }

  refresh() : void {

    this.router.navigateByUrl("/home",{skipLocationChange:true}).then(()=>{this.router.navigate(['/vente']).then(()=>{window.location.reload();})})
  }

}
