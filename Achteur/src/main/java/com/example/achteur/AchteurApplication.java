package com.example.achteur;

import com.example.achteur.Entities.Achteur;
import com.example.achteur.Repository.RepositoryAchteur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AchteurApplication implements CommandLineRunner {

    @Autowired
    RepositoryAchteur repositoryAchteur;
    public static void main(String[] args) {
        SpringApplication.run(AchteurApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {



        Achteur a=new Achteur(null,"ayman","rabat");
        Achteur a1 = new Achteur(null, "Fatima", "Casablanca");
        Achteur a2 = new Achteur(null, "Mehdi", "Tanger");
        Achteur a3 = new Achteur(null, "Lina", "Marrakech");
        Achteur a4 = new Achteur(null, "jamal", "Fes");

        repositoryAchteur.save(a);
        repositoryAchteur.save(a1);
        repositoryAchteur.save(a2);
        repositoryAchteur.save(a3);
        repositoryAchteur.save(a4);

        System.out.println("achteur marche tres bien");

    }
}
