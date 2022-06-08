package ru.vsu.cs.grocery.db.models;

import lombok.*;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@With
@Entity(name = "category")
@Table(name = "category")
public class CategoryItem {

    @Id
    @GeneratedValue(generator = "category_id_seq")
    private Long id;
    @Column(name = "parent_id")
    private Long parentId;
    @Column(name = "image_url")
    private String imageUrl;
    private String name;

}
