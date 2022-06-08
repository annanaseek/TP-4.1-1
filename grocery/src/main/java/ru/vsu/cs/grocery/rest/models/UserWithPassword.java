package ru.vsu.cs.grocery.rest.models;

import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
public class UserWithPassword extends User{
    private String password;
}
