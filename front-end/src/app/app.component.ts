import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {KeycloakProfile} from "keycloak-js";
import {HttpClient} from "@angular/common/http";
import {NotificationService} from "./services/notification.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements  OnInit{

  public profile? : KeycloakProfile;
  constructor(public keycloakService:KeycloakService,public http:HttpClient,public S_notification:NotificationService) {
  }

  ngOnInit() {
    if(this.keycloakService.isLoggedIn()){
      this.keycloakService.loadUserProfile().then(profile=>{
        this.profile=profile;
      });
    }

  }

  async login() {
    await this.keycloakService.login({
      redirectUri: window.location.origin
    });
  }

  logout() {
    this.keycloakService.logout(window.location.origin)
  }




  title = 'front-end';

}
