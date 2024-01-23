import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AchteurComponent } from './achteur/achteur.component';
import { ProduitComponent } from './produit/produit.component';
import { VenteComponent } from './vente/vente.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {HttpClientModule} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import { UpdateAchteurComponent } from './update-achteur/update-achteur.component';
import {RouterLink} from "@angular/router";
import { AcheterComponent } from './acheter/acheter.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { AjouterProuduitComponent } from './ajouter-prouduit/ajouter-prouduit.component';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'magasin_realm',
        clientId: 'Angular'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AchteurComponent,
    ProduitComponent,
    VenteComponent,
    UpdateAchteurComponent,
    AcheterComponent,
    UpdateProduitComponent,
    AjouterProuduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgForOf,
    HttpClientModule,
    KeycloakAngularModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink

  ],
  providers: [

  {provide : APP_INITIALIZER, deps : [KeycloakService],useFactory : initializeKeycloak, multi : true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
