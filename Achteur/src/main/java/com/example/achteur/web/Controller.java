package com.example.achteur.web;

import com.example.achteur.Entities.Achteur;
import com.example.achteur.Repository.RepositoryAchteur;
import com.example.achteur.publisher.RabbitProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controller {

    @Autowired
    RepositoryAchteur repositoryAchteur;
    @Autowired
    RabbitProducer rabbitProducer;


 //   @PreAuthorize("hasAuthority('USER')")

    @GetMapping("/achteurs")

    public List<Achteur> listerAll(){


        return repositoryAchteur.findAll();
    }

    @GetMapping("/achteurs/{id}")

    public  Achteur get (  @PathVariable Integer id){

        return repositoryAchteur.findById(id).get();
    }




    @PutMapping("/achteurs/{id}")
    public void update( @RequestBody Achteur a, @PathVariable Integer id){

        Achteur achteur=new Achteur();
       achteur=repositoryAchteur.findById(id).get();

       if(a.getNom()!=null){

           achteur.setNom(a.getNom());
       }
       if(a.getVille()!=null){
           achteur.setVille(a.getVille());
       }
       repositoryAchteur.save(achteur);
    }
    @PostMapping("/achteurs")

    public  void add(@RequestBody Achteur a){

        repositoryAchteur.save(a);
    }

    @DeleteMapping("/achteurs/{id}")

    public void delete(@PathVariable Integer id){

        rabbitProducer.envoyerMessagetoVente(id);

        repositoryAchteur.deleteById(id);


    }


}
