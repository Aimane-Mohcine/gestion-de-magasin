package com.example.vente.Repository;

import com.example.vente.Entities.Vente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryVente extends JpaRepository<Vente,Integer> {
}
