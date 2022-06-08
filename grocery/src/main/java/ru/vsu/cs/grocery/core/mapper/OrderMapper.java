package ru.vsu.cs.grocery.core.mapper;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import ru.vsu.cs.grocery.db.models.OrderItem;
import ru.vsu.cs.grocery.db.models.ProductOrderItem;
import ru.vsu.cs.grocery.rest.models.Basket;
import ru.vsu.cs.grocery.rest.models.Order;
import ru.vsu.cs.grocery.rest.models.ProductWithCount;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class OrderMapper {

    private final ProductMapper productMapper;
    private final UserMapper userMapper;

    public Basket map2Basket(List<ProductOrderItem> items, Long orderId) {
        if (items == null) return null;
        if (items.isEmpty()) return Basket.builder().id(orderId).products(List.of()).build();

        List<ProductWithCount> products = items.stream()
            .map(p -> ProductWithCount.builder()
                .count(p.getCount())
                .product(productMapper.map2Product(p.getProduct()))
                .build()
            ).collect(Collectors.toList());

        BigDecimal price = BigDecimal.valueOf(0);
        for(ProductWithCount p: products) {
            price = price.add(p.getProduct().getPrice().multiply(BigDecimal.valueOf(p.getCount())));
        }

        return Basket.builder().products(products).id(orderId).price(price).build();
    }

    public Order map2Order(OrderItem order, List<ProductOrderItem> products) {
        if (order == null) return null;
        Basket basket = map2Basket(products, order.getId());
        if (basket == null) return null;
        return Order.builder()
            .id(order.getId())
            .client(userMapper.map2User(order.getClient()))
            .courier(userMapper.map2User(order.getCourier()))
            .date(order.getDate())
            .status(order.getStatus())
            .price(basket.getPrice())
            .products(basket.getProducts())
            .address(order.getAddress())
            .orderInterval(order.getOrderInterval())
            .build();
    }
}
