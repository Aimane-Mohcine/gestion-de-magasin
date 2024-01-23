package com.example.produit.Config;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {


    @Value("${rabbitmq.queue3.name}")
    private String queue3;
    @Value("${rabbitmq.exchange3.name}")
    private String exchange3;
    @Value("${rabbitmq.binding3.name}")
    private String routing_key3;

    @Bean
    public Queue queue3(){
        return new Queue(queue3);
    }
    @Bean
    public DirectExchange exchange3(){
        return new DirectExchange(exchange3);
    }
    @Bean
    public Binding binding3(){
        return BindingBuilder
                .bind(queue3())
                .to(exchange3())
                .with(routing_key3);
    }





}
