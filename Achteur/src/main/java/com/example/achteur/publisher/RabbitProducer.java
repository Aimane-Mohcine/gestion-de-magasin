package com.example.achteur.publisher;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class RabbitProducer {

    private static final Logger LOGGER = LoggerFactory.getLogger(RabbitProducer.class);

    @Value("${rabbitmq.exchange.name}")
    private String exchange;

    @Value("${rabbitmq.binding.name}")
    private String binding;



    private RabbitTemplate rabbitTemplate;

    public RabbitProducer(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void envoyerMessagetoVente(Integer message){
        LOGGER.info(String.format("Message envoyé vers notification -> %d", message));
        rabbitTemplate.convertAndSend(exchange, binding, message);
        //System.out.println(LOGGER.info(String.format("Message envoyé -> %s", message)));
    }
    public void envoyerMessagetoNotification(String message) {
        LOGGER.info(String.format("Message envoyé vers notification -> %s", message));
        rabbitTemplate.convertAndSend(exchange, binding, message);
        //System.out.println(LOGGER.info(String.format("Message envoyé -> %s", message)));
    }

}
