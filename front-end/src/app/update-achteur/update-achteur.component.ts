import {Component, OnInit} from '@angular/core';
import {AchteurService} from "../services/achteur.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-update-achteur',
  templateUrl: './update-achteur.component.html',
  styleUrl: './update-achteur.component.css'
})


export class UpdateAchteurComponent implements OnInit{
  nom: string = "";
  ville: string = " ";
  achteur:any;

constructor(private  service:AchteurService,public router:Router) {
}
ngOnInit() {

  this.service.getbyid().subscribe(
    {
      next: value => {

        this.achteur=value;
        this.nom=this.achteur.nom;
        this.ville=this.achteur.ville;
      },
      error: err => {
        console.log(err);
      }
    }
  )
}


  submitForm(){

      this.achteur.nom=this.nom;
      this.achteur.ville=this.ville;

  this.service.update(this.achteur).subscribe(
    {
      next: value => {
        this.router.navigate(['/achteur']);

      },
      error: err => {
        console.log(err);
      }
    }
  )




  }

}


