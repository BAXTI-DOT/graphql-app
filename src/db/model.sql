CREATE TABLE flowers(
    flower_id serial NOT NULL PRIMARY KEY,
    flower_name text not null,
    flower_price float not null,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP
);