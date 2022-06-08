package ru.vsu.cs.grocery.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ru.vsu.cs.grocery.db.models.CategoryItem;

import java.util.List;

public interface CategoryRepository extends JpaRepository<CategoryItem, Long> {

    List<CategoryItem> findAllByParentIdIsNull();

    List<CategoryItem> findAllByParentId(Long parentId);

    @Query("select c from category c where lower(c.name) like lower(?1)")
    List<CategoryItem> search(String pattern);

}
