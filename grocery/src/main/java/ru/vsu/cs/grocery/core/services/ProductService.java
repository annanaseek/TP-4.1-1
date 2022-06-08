package ru.vsu.cs.grocery.core.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.vsu.cs.grocery.core.mapper.CategoryMapper;
import ru.vsu.cs.grocery.core.mapper.ProductMapper;
import ru.vsu.cs.grocery.db.models.ProductItem;
import ru.vsu.cs.grocery.db.repository.ProductRepository;
import ru.vsu.cs.grocery.rest.models.Category;
import ru.vsu.cs.grocery.rest.models.Product;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductMapper productMapper;
    private final CategoryMapper categoryMapper;
    private final ProductRepository productRepository;
    private final CategoryService categoryService;

    public List<Product> getAllProduct() {
        return productMapper.map2Product(productRepository.findAll());
    }

    public List<Product> getAllProductByCategoryId(String categoryId) {
        Category category = categoryService.getCategory(categoryId);
        if (category.getParentId() == null) {
            return productMapper.map2Product(
                productRepository.findAllByCategoryIdIn(category
                    .getItems().stream()
                    .map(Category::getId)
                    .collect(Collectors.toList())));
        } else {
            return productMapper.map2Product(
                productRepository.findAllByCategoryIdIs(category.getId()));
        }
    }


    public List<Product> search(String name) {
        return productMapper.map2Product(productRepository.search("%" + name + "%"));
    }

    public boolean delete(String productId) {
        var item = productRepository.findById(Long.valueOf(productId)).orElse(null);
        productRepository.deleteById(Long.valueOf(productId));
        return item != null;
    }

    public Product create(Product product) {
        ProductItem productItem = productMapper.map2ProductItem(product);
        ProductItem savedProduct = productRepository.save(productItem);
        return productMapper.map2Product(savedProduct);
    }

    public Product update(Product product) {
        ProductItem productItem = productMapper.map2ProductItem(product);
        ProductItem savedProduct = productRepository.save(productItem);
        return productMapper.map2Product(savedProduct);
    }

}
