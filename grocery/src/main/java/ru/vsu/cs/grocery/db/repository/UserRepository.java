package ru.vsu.cs.grocery.db.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ru.vsu.cs.grocery.db.models.UserItem;
import ru.vsu.cs.grocery.rest.models.CourierStatus;
import ru.vsu.cs.grocery.rest.models.Role;

public interface UserRepository extends JpaRepository<UserItem, Long> {

    UserItem findByPhone(String phone);

    UserItem findByStatus(CourierStatus status);

    UserItem findByRole(Role role);

}
