package com.example.vente;

import com.example.vente.Entities.Vente;
import com.example.vente.Repository.RepositoryVente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class VenteApplication implements CommandLineRunner {
    @Autowired
    RepositoryVente repositoryVente;


    public static void main(String[] args) {
        SpringApplication.run(VenteApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {



        Vente v1=new Vente(null,1,1,null,null);
        Vente v2=new Vente(null,2,2,null,null);
        Vente v3=new Vente(null,3,3,null,null);
        Vente v4=new Vente(null,4,4,null,null);
        Vente v5=new Vente(null,5,5,null,null);


        repositoryVente.save(v1);
        repositoryVente.save(v2);
        repositoryVente.save(v3);
        repositoryVente.save(v4);
        repositoryVente.save(v5);

        System.out.println("vente marche tres bien ");

    }
}
