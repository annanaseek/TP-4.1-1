package ru.vsu.cs.grocery.core.services;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.vsu.cs.grocery.core.mapper.UserMapper;
import ru.vsu.cs.grocery.db.models.UserItem;
import ru.vsu.cs.grocery.db.repository.UserRepository;
import ru.vsu.cs.grocery.rest.models.CourierStatus;
import ru.vsu.cs.grocery.rest.models.Role;
import ru.vsu.cs.grocery.rest.models.User;
import ru.vsu.cs.grocery.rest.models.UserWithPassword;

import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserMapper userMapper;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public User registration(UserWithPassword user) {
        if (userRepository.findByPhone(user.getPhone()) != null)
            return null;
        UserItem userItem = userMapper.map2UserItem(user);
        userItem.setPassword(passwordEncoder.encode(user.getPassword()));
        userItem.setRole(Role.USER);
        return userMapper.map2User(userRepository.save(userItem));
    }

    public UserItem getUserItem() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) auth.getPrincipal();
        return userRepository.findById(currentUser.getId()).orElse(null);
    }

    public User getUser() {
        UserItem realUser = getUserItem();
        if (realUser == null)
            return null;
        return userMapper.map2User(realUser);
    }

    public User editUser(UserWithPassword user) {
        User currentUser = getUser();

        if (!user.getPhone().equals(currentUser.getPhone())) {
            UserItem checkUser = userRepository.findByPhone(user.getPhone());
            if (checkUser != null) return null;
        }

        UserItem saveUser = userMapper.map2UserItem(user);
        saveUser.setId(currentUser.getId());
        saveUser.setRole(currentUser.getRole());
        saveUser.setPassword(passwordEncoder.encode(user.getPassword()));

        return userMapper.map2User(userRepository.save(saveUser));
    }

    public boolean deleteMe() {
        User currentUser = getUser();
        if (currentUser == null)
            return false;
        userRepository.deleteById(currentUser.getId());
        SecurityContextHolder.clearContext();
        return true;
    }

    public List<User> getAllUsers() {
        return userMapper.map2User(userRepository.findAll());
    }

    public User updateRole(String id, String role) {
        return userRepository.findById(Long.valueOf(id))
            .map(u -> u.withRole(Role.valueOf(role.toUpperCase(Locale.ROOT))))
            .map(u -> u.getRole().equals(Role.COURIER) ? u.withStatus(CourierStatus.FREE) : u)
            .map(userRepository::save)
            .map(userMapper::map2User)
            .orElse(null);
    }

    public boolean deleteUser(String id) {
        UserItem user = userRepository.findById(Long.valueOf(id)).orElse(null);
        userRepository.deleteById(Long.valueOf(id));
        return user != null;
    }

    public UserItem getCourier(){
        UserItem item = userRepository.findByStatus(CourierStatus.FREE);
        if (item == null)
            return userRepository.findByRole(Role.COURIER);
        return item;
    }
}
