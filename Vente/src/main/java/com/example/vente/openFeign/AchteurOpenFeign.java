package com.example.vente.openFeign;

import com.example.vente.model.Achteur;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "ACHTEUR-SERVICE")
public interface AchteurOpenFeign {

    @GetMapping("/achteurs")

    public List<Achteur> getAllAchteurs();

    @GetMapping("/achteurs/{id}")
    public Achteur findBy ( @PathVariable Integer id);
}
