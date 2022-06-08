package ru.vsu.cs.grocery.core.mapper;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.vsu.cs.grocery.db.models.CategoryItem;
import ru.vsu.cs.grocery.db.models.ProductItem;
import ru.vsu.cs.grocery.rest.models.Category;
import ru.vsu.cs.grocery.rest.models.Product;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductMapper {

    private final CategoryMapper categoryMapper;

    public Product map2Product(ProductItem item) {
        if(item == null) return null;
        return Product.builder()
            .id(item.getId())
            .name(item.getName())
            .price(item.getPrice())
            .description(item.getDescription())
            .count(item.getCount())
            .imageUrl(item.getImageUrl())
            .protein(item.getProtein())
            .composition(item.getComposition())
            .calories(item.getCalories())
            .fats(item.getFats())
            .carbohydrates(item.getCarbohydrates())
            .categoryId(item.getCategoryId())
            .build();
    }

    public ProductItem map2ProductItem(Product item) {
        if(item == null) return null;
        return ProductItem.builder()
            .id(item.getId())
            .name(item.getName())
            .price(item.getPrice())
            .description(item.getDescription())
            .count(item.getCount())
            .imageUrl(item.getImageUrl())
            .protein(item.getProtein())
            .composition(item.getComposition())
            .calories(item.getCalories())
            .fats(item.getFats())
            .carbohydrates(item.getCarbohydrates())
            .categoryId(item.getCategoryId())
            .build();
    }

    public List<Product> map2Product(List<ProductItem> items) {
        return items.stream().map(this::map2Product).collect(Collectors.toList());
    }

    public List<ProductItem> map2ProductItem(List<Product> items) {
        return items.stream().map(this::map2ProductItem).collect(Collectors.toList());
    }

}
