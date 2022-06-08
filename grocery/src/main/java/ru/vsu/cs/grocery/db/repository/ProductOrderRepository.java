package ru.vsu.cs.grocery.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.vsu.cs.grocery.db.models.OrderItem;
import ru.vsu.cs.grocery.db.models.ProductOrderItem;

import java.util.List;
import java.util.Optional;

public interface ProductOrderRepository extends JpaRepository<ProductOrderItem, Long> {

    List<ProductOrderItem> findAllByOrderId(Long id);

    Optional<ProductOrderItem> findByOrderIdAndProduct_Id(Long orderId, Long productId);

    void deleteByOrderIdAndProduct_Id(Long orderId, Long productId);

}
