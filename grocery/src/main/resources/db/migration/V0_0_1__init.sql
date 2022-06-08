create table users
(
    id       serial primary key not null,
    name     varchar            not null,
    phone    varchar unique     not null,
    password varchar            not null,
    role     varchar            not null,
    status   varchar default null
);

create table category
(
    id        serial primary key not null,
    parent_id integer default null,
    name      varchar            not null,
    image_url varchar default null,

    constraint category_category_parent_id
        foreign key (parent_id)
            references category (id) on delete set null
);

create table orders
(
    id             serial primary key not null,
    client_id      integer            not null,
    courier_id     integer,
    address        varchar,
    status         varchar            not null,
    date           timestamptz,
    order_interval integer check ( order_interval > 0 ),

    constraint orders_users_client_id
        foreign key (client_id)
            references users (id),

    constraint orders_users_courier_id
        foreign key (courier_id)
            references users (id)
);

create table product
(
    id            serial primary key          not null,
    name          varchar                     not null,
    price         numeric                     not null,
    count         integer check ( count > 0 ) not null,
    image_url     varchar                     not null,

    description   varchar                     not null,
    composition   varchar,
    protein       numeric,
    fats          numeric,
    carbohydrates numeric,
    calories      numeric,


    category_id   integer                     not null,

    constraint product_category_category_id
        foreign key (category_id)
            references category (id)
);

create table product_order
(
    id         serial primary key          not null,
    product_id integer                     not null,
    order_id   integer                     not null,
    count      integer check ( count > 0 ) not null,
    unique (product_id, order_id)
);