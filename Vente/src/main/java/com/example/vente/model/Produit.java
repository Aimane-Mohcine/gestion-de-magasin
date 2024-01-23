package com.example.vente.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Produit {

    Integer id;
    String marque;
    Double prix;

    Integer quantie;
}
