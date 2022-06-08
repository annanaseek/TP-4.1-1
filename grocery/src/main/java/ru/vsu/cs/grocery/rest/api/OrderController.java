package ru.vsu.cs.grocery.rest.api;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.vsu.cs.grocery.core.services.OrderService;
import ru.vsu.cs.grocery.rest.models.Order;
import ru.vsu.cs.grocery.rest.models.OrderInfo;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/order")
public class OrderController {

    private final OrderService orderService;

    @GetMapping("/all/my")
    public List<Order> getHistory(){
        return orderService.getMyHistory();
    }

    @GetMapping("/all/admin")
    public List<Order> getAll(){
        return orderService.getAll();
    }

    @GetMapping("/all/courier")
    public List<Order> getCourierOrders(){
        return orderService.getCourierOrders();
    }

    @GetMapping("/{id}")
    public Order getById(@PathVariable String id){
        return orderService.getById(id);
    }

    @PostMapping("/create")
    public Order createOrder(@RequestBody OrderInfo orderInfo){
        return orderService.createOrder(orderInfo);
    }

    @PostMapping("/{id}/{status}")
    public ResponseEntity<Order> updateStatus(@PathVariable String id, @PathVariable String status){
        var order = orderService.updateStatus(id, status);
        if(order != null)
            return ResponseEntity.ok(order);
        return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).build();
    }


}
