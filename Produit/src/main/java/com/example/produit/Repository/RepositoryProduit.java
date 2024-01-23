package com.example.produit.Repository;

import com.example.produit.Entities.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryProduit extends JpaRepository<Produit,Integer> {
}
