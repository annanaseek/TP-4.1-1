package ru.vsu.cs.grocery.security.converter;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationConverter;
import ru.vsu.cs.grocery.security.models.User;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class AuthenticationConverterImpl implements AuthenticationConverter {

    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();
    private static final Logger logger = LoggerFactory.getLogger(AuthenticationConverterImpl.class);

    @Override
    public Authentication convert(HttpServletRequest request) {

        User user;

        try (var inputStream = request.getInputStream()) {
            user = OBJECT_MAPPER.readValue(inputStream, User.class);
        } catch (IOException e) {
            logger.error("Cannot read login request", e);
            return null;
        }

        return new UsernamePasswordAuthenticationToken(
                user.getUsername(),
                user.getPassword()
        );

    }
}
