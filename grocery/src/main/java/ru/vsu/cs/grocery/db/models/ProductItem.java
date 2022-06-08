package ru.vsu.cs.grocery.db.models;

import lombok.*;
import ru.vsu.cs.grocery.rest.models.Category;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@With
@Entity(name = "product")
@Table(name = "product")
public class ProductItem {

    @Id
    @GeneratedValue(generator = "product_id_seq")
    private Long id;
    private String name;
    private String description;
    private BigDecimal price;
    private Integer count;
    @Column(name = "image_url")
    private String imageUrl;

    private String composition;
    private Double protein;
    private Double fats;
    private Double carbohydrates;
    private Double calories;

    @Column(name = "category_id")
    private Long categoryId;

}
