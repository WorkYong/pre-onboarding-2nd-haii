-- migrate:up
CREATE TABLE cities (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name INT(30) NOT NULL,
  province_id INT NOT NULL,
  FOREIGN KEY (province_id) REFERENCES provinces(id)
);

-- migrate:down

DROP TABLE cities;