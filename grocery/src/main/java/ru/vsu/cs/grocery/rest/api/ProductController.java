package ru.vsu.cs.grocery.rest.api;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.vsu.cs.grocery.core.services.ProductService;
import ru.vsu.cs.grocery.rest.models.Product;

import java.util.List;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping("/all")
    public List<Product> getAllProducts(){
        return productService.getAllProduct();
    }

    @GetMapping("{categoryId}")
    public List<Product> getProductsByCategoryId(@PathVariable String categoryId){
        return productService.getAllProductByCategoryId(categoryId);
    }

    @GetMapping("/search/{name}")
    public List<Product> searchProduct(@PathVariable String name){
        return productService.search(name);
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product){
        return productService.create(product);
    }

    @PutMapping("{id}")
    public Product updateProduct(@PathVariable String id, @RequestBody Product product){
        return productService.update(product.withId(Long.valueOf(id)));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable String id){
        if (productService.delete(id)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
