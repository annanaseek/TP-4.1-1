package ru.vsu.cs.grocery.rest.models;

import lombok.Builder;
import lombok.Data;
import lombok.With;

import java.util.List;

@Builder
@With
@Data
public class Category {

    private Long id;
    private Long parentId;
    private String name;
    private String imageUrl;

    private List<Category> items;

}
