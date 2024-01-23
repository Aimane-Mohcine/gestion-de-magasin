package com.example.vente.consomer;

import com.example.vente.Entities.Vente;
import com.example.vente.Repository.RepositoryVente;
import com.example.vente.publisher.RabbitProducer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RabbitMQConsumer {
    @Autowired
    RepositoryVente repositoryVente;

    @Autowired
    RabbitProducer r;
    private static final Logger LOGGER = LoggerFactory.getLogger(RabbitMQConsumer.class);

    @RabbitListener(queues = {"${rabbitmq.queue.name}"})
    public void consume(Integer message) {
        LOGGER.info(String.format("Message consommé -> %d", message));

        //List<Vente> l = repositoryVente.findAll();
    List<Vente> l= new ArrayList<>();
    l=repositoryVente.findAll();
        for (Vente v : l) {

            int ia=v.getIdAchteur();
            int iv=v.getId();
            if(ia==message){

                r.envoyerMessagetoNotification("vous avez supprimer les ventes de Achteur de id " + message);
                repositoryVente.deleteById(iv);



            }
            }
       }




    @RabbitListener(queues = {"${rabbitmq.queue3.name}"})
    public void consume3(Integer message) {
        LOGGER.info(String.format("Message consommé -> %d", message));

        List<Vente> l= new ArrayList<>();
        l=repositoryVente.findAll();
        for (Vente v : l) {

            int ia=v.getIdProduit();
            int iv=v.getId();
            if(ia==message){

                r.envoyerMessagetoNotification("vous avez supprimer les ventes de produit de id " + message);
                repositoryVente.deleteById(iv);



            }
        }
    }
}


