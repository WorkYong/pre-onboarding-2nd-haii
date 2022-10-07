-- migrate:up

INSERT INTO types (name) VALUES ("치매안심센터"),("광역치매센터"),("치매상담전화센터");

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE types;
SET FOREIGN_KEY_CHECKS = 1;