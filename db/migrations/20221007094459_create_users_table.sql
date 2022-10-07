-- migrate:up
CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(10) NOT NULL,
  account VARCHAR(30) NOT NULL UNIQUE,
  email VARCHAR(40) NOT NULL UNIQUE,
  phone_number VARCHAR(20) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL,
  is_admin TINYINT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT NOW(),
  updated_at DATETIME NULL ON UPDATE NOW(),
  location_id INT NULL,
  FOREIGN KEY (location_id) REFERENCES locations(id)
);

-- migrate:down

DROP TABLE users;
