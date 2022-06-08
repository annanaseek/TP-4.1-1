package ru.vsu.cs.grocery.core.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.vsu.cs.grocery.core.mapper.OrderMapper;
import ru.vsu.cs.grocery.db.models.OrderItem;
import ru.vsu.cs.grocery.db.models.ProductItem;
import ru.vsu.cs.grocery.db.models.ProductOrderItem;
import ru.vsu.cs.grocery.db.models.UserItem;
import ru.vsu.cs.grocery.db.repository.OrderRepository;
import ru.vsu.cs.grocery.db.repository.ProductOrderRepository;
import ru.vsu.cs.grocery.db.repository.ProductRepository;
import ru.vsu.cs.grocery.rest.exception.BadParametersException;
import ru.vsu.cs.grocery.rest.exception.NotFoundException;
import ru.vsu.cs.grocery.rest.models.Basket;
import ru.vsu.cs.grocery.rest.models.Status;
import ru.vsu.cs.grocery.rest.models.User;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BasketService {

    private final UserService userService;
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;
    private final ProductOrderRepository productOrderRepository;
    private final OrderMapper mapper;


    public Basket addProduct(String productId, String strCount) {
        int count = Integer.parseInt(strCount);
        if (count <= 0)
            throw new BadParametersException("Count <= 0");

        OrderItem order = getOrInitBasketOrder();

        ProductItem product = productRepository.findById(Long.valueOf(productId)).orElse(null);
        if (product == null)
            throw new NotFoundException("Product not fount");

        ProductOrderItem productOrderItem = productOrderRepository.findByOrderIdAndProduct_Id(
            order.getId(),
            product.getId()
        ).orElse(ProductOrderItem.builder()
            .orderId(order.getId())
            .product(product)
            .build()
        ).withCount(Math.min(count, product.getCount()));

        productOrderRepository.save(productOrderItem);

        return getBasket(order.getId());
    }

    @Transactional
    public Basket deleteProduct(String productId) {
        OrderItem order = getOrInitBasketOrder();
        productOrderRepository.deleteByOrderIdAndProduct_Id(order.getId(), Long.valueOf(productId));
        return getBasket(order.getId());
    }

    public OrderItem getOrInitBasketOrder() {
        UserItem user = userService.getUserItem();
        OrderItem orderItem = orderRepository.findByClient_IdAndStatus(user.getId(), Status.BASKET);
        if (orderItem == null)
            return orderRepository.save(OrderItem.builder()
                .client(user)
                .status(Status.BASKET)
                .build());
        return orderItem;
    }

    public Basket getBasket(Long orderId) {
        List<ProductOrderItem> productOrderItems = productOrderRepository.findAllByOrderId(orderId);
        return mapper.map2Basket(productOrderItems, orderId);
    }

    public Basket getBasket() {
        OrderItem orderItem = getOrInitBasketOrder();
        return getBasket(orderItem.getId());
    }
}
