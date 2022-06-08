package ru.vsu.cs.grocery.db.models;

import lombok.*;
import ru.vsu.cs.grocery.rest.models.Status;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@With
@Entity(name = "order")
@Table(name = "orders")
public class OrderItem {

    @Id
    @GeneratedValue(generator = "orders_id_seq")
    private Long id;

    @ManyToOne
    private UserItem client;

    @ManyToOne
    private UserItem courier;

    private String address;
    @Enumerated(EnumType.STRING)
    private Status status;

    private ZonedDateTime date;
    @Column(name = "order_interval")
    private Integer orderInterval;

}
