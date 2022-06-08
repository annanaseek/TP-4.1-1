package ru.vsu.cs.grocery.security.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ru.vsu.cs.grocery.db.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        var userModel = userRepository.findByPhone(username);

        if (userModel == null) {
            throw new UsernameNotFoundException("Unknown user: " + username);
        }

        return User.builder()
                .username(userModel.getPhone())
                .password(userModel.getPassword())
                .roles(userModel.getRole().name())
                .build();
    }

}
