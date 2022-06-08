package ru.vsu.cs.grocery.db.models;

import lombok.*;
import ru.vsu.cs.grocery.rest.models.CourierStatus;
import ru.vsu.cs.grocery.rest.models.Role;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@With
@Entity(name = "user")
@Table(name = "users")
public class UserItem {

    @Id
    @GeneratedValue(generator = "users_id_seq")
    private Long id;
    private String name;
    private String phone;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;

    @Enumerated(EnumType.STRING)
    private CourierStatus status;
}
