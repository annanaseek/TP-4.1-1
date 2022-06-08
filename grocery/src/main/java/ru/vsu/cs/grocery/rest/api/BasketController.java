package ru.vsu.cs.grocery.rest.api;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.vsu.cs.grocery.core.services.BasketService;
import ru.vsu.cs.grocery.rest.models.Basket;

@RestController
@RequestMapping("/basket")
@RequiredArgsConstructor
public class BasketController {

    private final BasketService basketService;

    @GetMapping()
    public Basket getBasket(){
        return basketService.getBasket();
    }

    @PostMapping("/{productId}/{count}")
    public Basket addProduct(@PathVariable String productId, @PathVariable String count){
        return basketService.addProduct(productId, count);
    }

    @DeleteMapping("/{productId}")
    public Basket deleteProduct(@PathVariable String productId){
        return basketService.deleteProduct(productId);
    }

}
