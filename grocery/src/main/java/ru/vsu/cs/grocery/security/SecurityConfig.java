package ru.vsu.cs.grocery.security;

import lombok.RequiredArgsConstructor;
import ma.glasnost.orika.MapperFacade;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import ru.vsu.cs.grocery.core.mapper.UserMapper;
import ru.vsu.cs.grocery.db.repository.UserRepository;
import ru.vsu.cs.grocery.security.converter.AuthenticationConverterImpl;
import ru.vsu.cs.grocery.security.handler.AuthenticationSuccessHandlerImpl;
import ru.vsu.cs.grocery.security.handler.LogoutSuccessHandlerImpl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserDetailsService userDetailsService;
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Bean
    PasswordEncoder passwordEncoder() {
        return new Pbkdf2PasswordEncoder("", 141_248, 512);
    }

    @Override
    protected void configure(AuthenticationManagerBuilder builder) {
        final DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(passwordEncoder());
        provider.setUserDetailsService(userDetailsService);
        builder.authenticationProvider(provider);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        final var authenticationFilter = new AuthenticationFilter(
            authenticationManager(),
            new AuthenticationConverterImpl()
        );

        authenticationFilter.setRequestMatcher(new AntPathRequestMatcher("/login", "POST"));

        authenticationFilter.setSuccessHandler(new AuthenticationSuccessHandlerImpl(userRepository, userMapper));

        authenticationFilter.setFailureHandler(new AuthenticationFailureHandler() {
            private final Logger logger = LoggerFactory.getLogger(SecurityConfig.class);

            @Override
            public void onAuthenticationFailure(
                HttpServletRequest request,
                HttpServletResponse response,
                AuthenticationException exception
            ) {
                logger.error("Authentication error", exception);
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            }
        });


        http
            .csrf().disable()
            .cors().disable()
            .authorizeRequests()
            .antMatchers("/login", "/registration").not().authenticated()
            .antMatchers(HttpMethod.GET, "/product", "/category").permitAll()
            .antMatchers(HttpMethod.POST, "/product", "/category").hasRole("ADMIN")
            .antMatchers(HttpMethod.PUT, "/product", "/category").hasRole("ADMIN")
            .antMatchers(HttpMethod.DELETE, "/product", "/category").hasRole("ADMIN")
            .antMatchers( "/user").hasRole("ADMIN")
            .antMatchers("/basket", "/order").authenticated()
            .anyRequest().permitAll()
            .and()
            .logout()
            .logoutSuccessHandler(new LogoutSuccessHandlerImpl())
            .logoutUrl("/logout")
            .invalidateHttpSession(true)
            .deleteCookies("JSESSIONID")
            .and()
            .addFilterAfter(authenticationFilter, LogoutFilter.class)
        ;

    }

}
