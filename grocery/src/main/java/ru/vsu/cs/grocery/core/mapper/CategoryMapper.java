package ru.vsu.cs.grocery.core.mapper;

import org.springframework.stereotype.Service;
import ru.vsu.cs.grocery.db.models.CategoryItem;
import ru.vsu.cs.grocery.rest.models.Category;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryMapper {

    public Category map2Category(CategoryItem categoryItem) {
        if(categoryItem == null) return null;
        return Category.builder()
            .id(categoryItem.getId())
            .name(categoryItem.getName())
            .parentId(categoryItem.getParentId())
            .imageUrl(categoryItem.getImageUrl())
            .build();
    }

    public CategoryItem map2CategoryItem(Category category) {
        return CategoryItem.builder()
            .id(category.getId())
            .name(category.getName())
            .parentId(category.getParentId())
            .imageUrl(category.getImageUrl())
            .build();
    }

    public List<Category> map2Category(List<CategoryItem> categoryItems) {
        return categoryItems.stream().map(this::map2Category).collect(Collectors.toList());
    }

    public List<CategoryItem> map2CategoryItem(List<Category> category) {
        return category.stream().map(this::map2CategoryItem).collect(Collectors.toList());
    }

}
