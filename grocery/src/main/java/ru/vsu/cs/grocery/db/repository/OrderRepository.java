package ru.vsu.cs.grocery.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.vsu.cs.grocery.db.models.OrderItem;
import ru.vsu.cs.grocery.rest.models.Status;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<OrderItem, Long> {

    OrderItem findByClient_IdAndStatus(Long id, Status status);

    List<OrderItem> findAllByClient_IdOrderByDate(Long clientId);

    List<OrderItem> findAllByCourier_IdOrderByDate(Long clientId);

    List<OrderItem> findAllByStatusAndOrderIntervalIsNotNull(Status status);

}
