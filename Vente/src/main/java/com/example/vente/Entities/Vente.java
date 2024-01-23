package com.example.vente.Entities;

import com.example.vente.model.Achteur;
import com.example.vente.model.Produit;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Vente {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    Integer idAchteur;
    Integer idProduit ;

    @Transient
    Achteur achteur;
    @Transient
    Produit produit;
}
