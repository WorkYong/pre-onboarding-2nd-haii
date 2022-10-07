-- migrate:up
INSERT INTO states (name) VALUES ("서울특별시"),("경기도"),("부산광역시")

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE states;
SET FOREIGN_KEY_CHECKS = 1;