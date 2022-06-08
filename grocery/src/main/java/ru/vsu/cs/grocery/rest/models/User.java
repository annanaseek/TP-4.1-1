package ru.vsu.cs.grocery.rest.models;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@With
public class User {

    private Long id;
    private String name;
    private String phone;
    private Role role;
}
