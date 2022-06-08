package ru.vsu.cs.grocery.rest.models;

import lombok.*;

import java.math.BigDecimal;
import java.time.ZonedDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@With
public class Order {

    private Long id;

    private User client;
    private User courier;

    private String address;
    private Status status;
    private ZonedDateTime date;
    private Integer orderInterval;
    private BigDecimal price;

    private List<ProductWithCount> products;
}
