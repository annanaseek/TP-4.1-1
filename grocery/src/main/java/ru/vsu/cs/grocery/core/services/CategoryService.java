package ru.vsu.cs.grocery.core.services;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import ru.vsu.cs.grocery.core.mapper.CategoryMapper;
import ru.vsu.cs.grocery.db.repository.CategoryRepository;
import ru.vsu.cs.grocery.rest.models.Category;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    public List<Category> getAllCategory() {
        return categoryMapper.map2Category(categoryRepository.findAll());
    }

    public List<Category> getAllRootCategory() {
        return categoryMapper.map2Category(categoryRepository.findAllByParentIdIsNull());
    }

    public List<Category> getAllRootCategoryWhitItems() {
        return categoryRepository.findAllByParentIdIsNull()
            .stream()
            .map(c -> Category.builder()
                .id(c.getId())
                .name(c.getName())
                .items(categoryMapper.map2Category(categoryRepository.findAllByParentId(c.getId())))
                .build()
            ).collect(Collectors.toList());
    }

    public Category getCategory(String id) {
        var category = categoryMapper.map2Category(categoryRepository.findById(Long.valueOf(id)).orElse(null));
        if (category.getParentId() == null) {
            category.setItems(categoryMapper.map2Category(categoryRepository.findAllByParentId(category.getId())));
        }
        return category;
    }

    public Category createCategory(Category category) {
        var item = categoryMapper.map2CategoryItem(category);
        return categoryMapper.map2Category(categoryRepository.save(item));
    }

    public Category updateCategory(String id, Category category) {
        var item = categoryMapper.map2CategoryItem(category);
        item.setId(Long.valueOf(id));
        return categoryMapper.map2Category(categoryRepository.save(item));
    }

    public boolean deleteCategory(String id) {
        var item = categoryRepository.findById(Long.valueOf(id)).orElse(null);
        categoryRepository.deleteById(Long.valueOf(id));
        return item != null;
    }

    public List<Category> search(String name) {
        return categoryMapper.map2Category(categoryRepository.search("%" + name + "%"));
    }

}
