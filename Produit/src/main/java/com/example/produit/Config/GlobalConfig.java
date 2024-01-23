package com.example.produit.Config;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "global.params")

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class GlobalConfig {
    int p1;
    int p2;
}
