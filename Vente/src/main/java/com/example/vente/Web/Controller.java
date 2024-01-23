package com.example.vente.Web;

import com.example.vente.Entities.Vente;
import com.example.vente.Repository.RepositoryVente;
import com.example.vente.model.Achteur;
import com.example.vente.model.Produit;
import com.example.vente.openFeign.AchteurOpenFeign;
import com.example.vente.openFeign.ProduitOpenFeign;
import com.example.vente.publisher.RabbitProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controller {


    @Autowired
    RepositoryVente repositoryVente;
    @Autowired
    AchteurOpenFeign achteurOpenFeign;
    @Autowired
    ProduitOpenFeign produitOpenFeign;
    @Autowired
    RabbitProducer rabbitProducer;

    @GetMapping("/ventes")
    public List<Vente> listerAll() {

        List<Vente> lv = repositoryVente.findAll();
        List<Achteur> la=achteurOpenFeign.getAllAchteurs();
        List<Produit> lp=produitOpenFeign.getAllProducts();

        for(Vente v: lv){

            for(Achteur a:la){

                if(v.getIdAchteur()==a.getId()){

                    v.setAchteur(a);
                    break;
                }
            }

            for(Produit p:lp){

                if(v.getIdProduit()==p.getId()){

                    v.setProduit(p);
                    break;
                }
            }
        }


        return  lv;
    }

    @GetMapping("/ventes/{id}")

    public Vente  getVente(@PathVariable Integer id ) {

        Vente v = repositoryVente.findById(id).get();
        Achteur a=achteurOpenFeign.findBy(v.getIdAchteur());

        Produit p=produitOpenFeign.findBy(v.getIdProduit());
        v.setProduit(p);
        v.setAchteur(a);
        return v;
    }

@PostMapping("/ventes")

    public void add(@RequestBody Vente v){


        repositoryVente.save(v);
    rabbitProducer.envoyerMessagetoNotification("Vous avez acheté le produit");

}

@DeleteMapping("/ventes/{id}")
    public void delete(@PathVariable Integer id){


    repositoryVente.deleteById(id);


}






}
