insert into category(parent_id, name)
VALUES (null, 'Молоко, сыр, яйца'),
       (1, 'Молоко'),
       (1, 'Сыр'),
       (1, 'Яйца');

insert into category(parent_id, name)
VALUES (null, 'Соки, воды, напитки'),
       (5, 'Соки'),
       (5, 'Вода'),
       (5, 'Газировка');

insert into product(name, price, count, image_url, description, composition, protein, fats, carbohydrates, calories,
                    category_id)
values ('Молоко Вкуснотеево', 75.55, 40, 'url', 'Белая вода из коровы', 'Состоит из молока', 12, 0.5, 3, 13, 2),
       ('Святой источник', 15.00, 14, 'url', 'Самая святая вода', 'Состоит из просвещения', 0.1, 0.1, 0.1, 1, 7);


insert into users(name, phone, password, role, status)
VALUES ('Admin', '+79001112233', '597af6e8816f64ccb6909b2b1eebf1a309452f73cee02573253931e7c215b37ebf988d2f8ad96a11a308d54d4c82af7515cdf4bd887041ea194c370873a4d4857223d78e652cd979', 'ADMIN', null),
       ('Courier', '+79002223344', '597af6e8816f64ccb6909b2b1eebf1a309452f73cee02573253931e7c215b37ebf988d2f8ad96a11a308d54d4c82af7515cdf4bd887041ea194c370873a4d4857223d78e652cd979', 'COURIER', null),
       ('User', '+79003334455', '597af6e8816f64ccb6909b2b1eebf1a309452f73cee02573253931e7c215b37ebf988d2f8ad96a11a308d54d4c82af7515cdf4bd887041ea194c370873a4d4857223d78e652cd979', 'USER', null);
