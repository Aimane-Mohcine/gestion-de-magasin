package com.example.produit.web;

import com.example.produit.Config.GlobalConfig;
import com.example.produit.Entities.Produit;
import com.example.produit.Repository.RepositoryProduit;
import com.example.produit.publisher.RabbitProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controller {

        @Autowired
    RepositoryProduit repositoryProduit;
    @Autowired
    GlobalConfig globalConfig;
    @Autowired
    RabbitProducer rabbitProducer;


    @GetMapping("/globaleconfig")

    public  GlobalConfig getGlobalConfig(){

        return globalConfig;
    }






    @GetMapping("/produits")

    public List<Produit> listerProduits(){

        return repositoryProduit.findAll();
    }

    @GetMapping("/produits/{id}")

    public  Produit getProduit( @PathVariable Integer id){

        return repositoryProduit.findById(id).get();
    }



    @PutMapping("produits/{id}")

    public  void update(@RequestBody Produit p, @PathVariable Integer id){

        Produit pp=new Produit();
        pp=repositoryProduit.findById(id).get();

        if(p.getPrix()!=null){

            pp.setPrix(p.getPrix());
        }
        if(p.getMarque()!=null){
            pp.setMarque(p.getMarque());
        }
        if(p.getQuantie()!=null){
            pp.setQuantie(p.getQuantie());
        }

        repositoryProduit.save(pp);

    }

    @PostMapping("/produits")
    public void add(@RequestBody Produit p){

        repositoryProduit.save(p);
    }

    @DeleteMapping("/produits/{id}")

    public void delete(@PathVariable Integer id){

        rabbitProducer.envoyerMessagetoVente(id);

        repositoryProduit.deleteById(id);
    }

}
