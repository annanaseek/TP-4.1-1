package ru.vsu.cs.grocery.rest.models;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductWithCount {

    private Product product;
    private Integer count;

}
