package ru.vsu.cs.grocery.rest.api;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import ru.vsu.cs.grocery.core.services.UserService;
import ru.vsu.cs.grocery.rest.models.User;
import ru.vsu.cs.grocery.rest.models.UserWithPassword;

import java.util.List;

@RestController
@RequestMapping("")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/registration")
    public ResponseEntity<User> createUser(@RequestBody UserWithPassword user) {
        var createdUser = userService.registration(user);
        if (createdUser == null)
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        return ResponseEntity.ok(createdUser);
    }

    @GetMapping("/me")
    public ResponseEntity<User> me(){
        var user = userService.getUser();
        if (user == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(user);
    }

    @PutMapping("/me")
    public ResponseEntity<User> editUser(@RequestBody UserWithPassword user) {
        var createdUser = userService.editUser(user);
        if (createdUser == null)
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        return ResponseEntity.ok(createdUser);
    }

    @DeleteMapping("/me")
    public ResponseEntity<Void> deleteUser() {
        if (userService.deleteMe()) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping("/user/all")
    public List<User> getAll(){
        return userService.getAllUsers();
    }

    @PostMapping("/user/{id}/{role}")
    public User setRole(@PathVariable String id, @PathVariable String role){
        return userService.updateRole(id, role);
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<Void> setRole(@PathVariable String id){
        if (userService.deleteUser(id))
            return ResponseEntity.ok().build();
        return ResponseEntity.notFound().build();
    }

}
