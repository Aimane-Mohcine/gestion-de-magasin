import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProduitComponent} from "./produit/produit.component";
import {AchteurComponent} from "./achteur/achteur.component";
import {VenteComponent} from "./vente/vente.component";
import {AuthGuard} from "./guards/auth.guard";
import {UpdateAchteurComponent} from "./update-achteur/update-achteur.component";
import {AcheterComponent} from "./acheter/acheter.component";
import {UpdateProduitComponent} from "./update-produit/update-produit.component";
import {AjouterProuduitComponent} from "./ajouter-prouduit/ajouter-prouduit.component";

const routes: Routes =
  [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'produit', component: ProduitComponent,canActivate: [AuthGuard] ,data: { roles: ['USER']}},
    { path: 'updateProduir', component: UpdateProduitComponent,canActivate: [AuthGuard] , data: {roles:['ADMIN']}},
    { path: 'AjouterProduit', component: AjouterProuduitComponent,canActivate: [AuthGuard] , data: {roles:['ADMIN']}},

    { path: 'acheter', component: AcheterComponent,canActivate: [AuthGuard] , data: {roles:['USER']}},

    { path: 'achteur', component: AchteurComponent  ,canActivate: [AuthGuard] , data: {roles:['ADMIN']}},
    { path: 'UpdateAchteur', component: UpdateAchteurComponent },

    { path: 'vente', component: VenteComponent , canActivate: [AuthGuard] , data: {roles:['ADMIN']}}


  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
