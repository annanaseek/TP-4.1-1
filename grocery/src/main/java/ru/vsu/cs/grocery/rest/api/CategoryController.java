package ru.vsu.cs.grocery.rest.api;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.vsu.cs.grocery.core.services.CategoryService;
import ru.vsu.cs.grocery.rest.models.Category;

import java.util.List;

@RestController
@RequestMapping(
    value = "/category",
    produces = "application/json"
)
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping
    public List<Category> getAllCategory() {
        return categoryService.getAllCategory();
    }

    @GetMapping("/root")
    public List<Category> getAllRootCategory() {
        return categoryService.getAllRootCategory();
    }

    @GetMapping("/root/all")
    public List<Category> getAllRootCategoryWhitItems() {
        return categoryService.getAllRootCategoryWhitItems();
    }

    @GetMapping("{id}")
    public Category getCategory(@PathVariable("id") String id) {
        return categoryService.getCategory(id);
    }

    @PostMapping
    public Category createCategory(@RequestBody Category category) {
        return categoryService.createCategory(category);
    }

    @PutMapping("{id}")
    public Category updateCategory(@PathVariable("id") String id, @RequestBody Category category) {
        return categoryService.updateCategory(id, category);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable("id") String id) {
        if (categoryService.deleteCategory(id)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
