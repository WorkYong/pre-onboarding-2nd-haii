-- migrate:up
CREATE TABLE locations (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name INT(30) NOT NULL,
  hospital_id INT NOT NULL,
  state_id INT NOT NULL,
  FOREIGN KEY (hospital_id) REFERENCES hospitals(id),
  FOREIGN KEY (state_id) REFERENCES states(id)
);

-- migrate:down

DROP TABLE locations;