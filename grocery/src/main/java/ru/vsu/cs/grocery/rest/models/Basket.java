package ru.vsu.cs.grocery.rest.models;

import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@With
public class Basket {

    private Long id;
    private List<ProductWithCount> products;
    private BigDecimal price;

}

