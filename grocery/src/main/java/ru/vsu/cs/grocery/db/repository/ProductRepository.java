package ru.vsu.cs.grocery.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ru.vsu.cs.grocery.db.models.CategoryItem;
import ru.vsu.cs.grocery.db.models.ProductItem;

import java.util.List;

public interface ProductRepository extends JpaRepository<ProductItem, Long> {

    List<ProductItem> findAllByCategoryIdIn(List<Long> items);


    List<ProductItem> findAllByCategoryIdIs(Long item);

    @Query("select p from product p where lower(p.name) like lower(?1)")
    List<ProductItem> search(String pattern);

}
