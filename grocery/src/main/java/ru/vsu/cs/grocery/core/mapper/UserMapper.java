package ru.vsu.cs.grocery.core.mapper;

import org.springframework.stereotype.Service;
import ru.vsu.cs.grocery.db.models.UserItem;
import ru.vsu.cs.grocery.rest.models.User;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserMapper {

    public User map2User(UserItem item) {
        return User.builder()
            .id(item.getId())
            .name(item.getName())
            .phone(item.getPhone())
            .role(item.getRole())
            .build();
    }

    public UserItem map2UserItem(User item) {
        return UserItem.builder()
            .id(item.getId())
            .name(item.getName())
            .phone(item.getPhone())
            .role(item.getRole())
            .build();
    }

    public List<User> map2User(List<UserItem> userItems) {
        return userItems.stream().map(this::map2User).collect(Collectors.toList());
    }

    public List<UserItem> map2UserItem(List<User> users) {
        return users.stream().map(this::map2UserItem).collect(Collectors.toList());
    }

}
