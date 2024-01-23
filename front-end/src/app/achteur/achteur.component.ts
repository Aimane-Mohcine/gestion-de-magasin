import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AchteurService} from "../services/achteur.service";
import {NotificationService} from "../services/notification.service";


@Component({
  selector: 'app-achteur',
  templateUrl: './achteur.component.html',
  styleUrl: './achteur.component.css'
})
export class AchteurComponent implements  OnInit{

  achteurs : any;
  constructor(public router:Router,private  http:HttpClient,private service:AchteurService, public serviceNotification:NotificationService) {
  }
  ngOnInit() {
    this.http.get("http://localhost:8888/ACHTEUR-SERVICE/achteurs").subscribe(
      {
        next : value => {
          this.achteurs=value;
        },
        error: err => {
          console.log(err)
        }
      }
    );

  }

  delete(id:any){



    if (confirm("Are you sure?")) {

      this.http.delete('http://localhost:8888/ACHTEUR-SERVICE/achteurs/'+id).subscribe({
        next:value => {               this.serviceNotification.getNotification();
          alert("delete successful");

            this.refresh();
        },
        error:err => {console.log(err)}
      })
    }
  }


send(id:any){

      this.service.send(id);
  this.router.navigate(['/UpdateAchteur']);  // Remplacez par le chemin de votre route

}


 //refresh() : void {


   // this.router.navigateByUrl("/home",{skipLocationChange:true}).then(()=>{this.router.navigate(['/achteur']).then(()=>{window.location.reload();


    //})});

  //}

  refresh(): void {
    this.router.navigateByUrl("/home", { skipLocationChange: true }).then(() => {
      this.router.navigate(['/achteur']).then(() => {
        if (window.performance && window.performance.navigation.type === 1) {
          console.log('La page a été rechargée !');
          // Ajoutez ici le code que vous souhaitez exécuter après le rechargement


        }
      });
    });
  }





}
