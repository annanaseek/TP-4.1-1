package ru.vsu.cs.grocery.core.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.vsu.cs.grocery.core.mapper.OrderMapper;
import ru.vsu.cs.grocery.db.models.OrderItem;
import ru.vsu.cs.grocery.db.repository.OrderRepository;
import ru.vsu.cs.grocery.db.repository.ProductOrderRepository;
import ru.vsu.cs.grocery.rest.exception.NotFoundException;
import ru.vsu.cs.grocery.rest.models.*;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final BasketService basketService;
    private final UserService userService;
    private final OrderRepository orderRepository;
    private final ProductOrderRepository productOrderRepository;
    private final OrderMapper mapper;

    public Order createOrder(OrderInfo orderInfo) {
        OrderItem order = basketService.getOrInitBasketOrder();
        var products = productOrderRepository.findAllByOrderId(order.getId());
        if (products == null || products.isEmpty())
            return null;

        order.setAddress(orderInfo.getAddress());
        order.setOrderInterval(orderInfo.getInterval());
        order.setStatus(Status.CREATED);
        order.setDate(ZonedDateTime.now());
        order.setCourier(userService.getCourier());

        order = orderRepository.save(order);
        return mapper.map2Order(order, products);
    }

    public Order updateStatus(String id, String status) {
        return orderRepository.findById(Long.valueOf(id))
            .map(u -> u.withStatus(Status.valueOf(status.toUpperCase(Locale.ROOT))))
            .map(orderRepository::save)
            .map(this::map2Order)
            .orElse(null);
    }

    public List<Order> getMyHistory() {
        User user = userService.getUser();
        List<OrderItem> orders = orderRepository.findAllByClient_IdOrderByDate(user.getId());
        return map2Orders(orders);
    }

    public List<Order> getAll() {
        List<OrderItem> orders = orderRepository.findAll();
        return map2Orders(orders);
    }

    public List<Order> getCourierOrders() {
        User user = userService.getUser();
        List<OrderItem> orders = orderRepository.findAllByCourier_IdOrderByDate(user.getId());
        return map2Orders(orders);
    }

    public Order getById(String id) {
        OrderItem order = orderRepository.findById(Long.valueOf(id)).orElse(null);
        if (order == null) throw new NotFoundException("Order not found");
        var products = productOrderRepository.findAllByOrderId(order.getId());
        return mapper.map2Order(order, products);
    }

    private List<Order> map2Orders(List<OrderItem> items) {
        return items.stream()
            .map(this::map2Order)
            .collect(Collectors.toList());
    }

    private Order map2Order(OrderItem item) {
        return mapper.map2Order(item, productOrderRepository.findAllByOrderId(item.getId()));
    }
}
