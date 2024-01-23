package com.example.produit;

import com.example.produit.Config.GlobalConfig;
import com.example.produit.Entities.Produit;
import com.example.produit.Repository.RepositoryProduit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({GlobalConfig.class})
public class ProduitApplication  implements CommandLineRunner {
    @Autowired
    RepositoryProduit repositoryProduit;

    public static void main(String[] args) {
        SpringApplication.run(ProduitApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {




        Produit p=new Produit(null,"gucci",200.00,40);
        Produit p2 = new Produit(null, "Adidas", 150.00, 51);
        Produit p3 = new Produit(null, "Samsung TV", 899.99, 10);
        Produit p4 = new Produit(null, "iPhone 13", 999.00, 7);
        Produit p5 = new Produit(null, "HUAWEI nova", 500.99, 20);





        repositoryProduit.save(p);
        repositoryProduit.save(p2);
        repositoryProduit.save(p3);
        repositoryProduit.save(p4);
        repositoryProduit.save(p5);
        System.out.println("produit marche tres bien");

    }
}
