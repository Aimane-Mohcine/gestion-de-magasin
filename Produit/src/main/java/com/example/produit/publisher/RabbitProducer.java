package com.example.produit.publisher;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class RabbitProducer {

    private static final Logger LOGGER = LoggerFactory.getLogger(RabbitProducer.class);

    @Value("${rabbitmq.exchange3.name}")
    private String exchange3;

    @Value("${rabbitmq.binding3.name}")
    private String binding3;



    private RabbitTemplate rabbitTemplate;

    public RabbitProducer(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void envoyerMessagetoVente(Integer message){
        LOGGER.info(String.format("Message envoyé vers notification -> %d", message));
        rabbitTemplate.convertAndSend(exchange3, binding3, message);
        //System.out.println(LOGGER.info(String.format("Message envoyé -> %s", message)));
    }

}
