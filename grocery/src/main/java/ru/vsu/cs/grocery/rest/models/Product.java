package ru.vsu.cs.grocery.rest.models;

import lombok.Builder;
import lombok.Data;
import lombok.With;

import java.math.BigDecimal;

@Builder
@With
@Data
public class Product {

    private Long id;
    private String name;
    private String description;
    private BigDecimal price;
    private Integer count;
    private String imageUrl;

    private String composition;
    private Double protein;
    private Double fats;
    private Double carbohydrates;
    private Double calories;

    private Long categoryId;

}
