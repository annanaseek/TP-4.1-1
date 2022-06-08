package ru.vsu.cs.grocery.db.models;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@With
@Entity(name = "product_order")
@Table(name = "product_order")
public class ProductOrderItem {

    @Id
    @GeneratedValue(generator = "product_order_id_seq")
    private Long id;
    @Column(name = "order_id")
    private Long orderId;
    @ManyToOne
    private ProductItem product;
    private Integer count;
}
