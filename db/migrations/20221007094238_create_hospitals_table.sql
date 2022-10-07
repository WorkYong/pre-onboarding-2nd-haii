-- migrate:up
CREATE TABLE hospitals (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  type VARCHAR (100) NULL,
  name VARCHAR(100) NOT NULL,
  representative VARCHAR(30),
  contact VARCHAR(30),
  doctor INT,
  nurse INT,
  social_worker INT,
  data LONGTEXT,
  created_at DATETIME NOT NULL DEFAULT NOW(),
  updated_at DATETIME NULL ON UPDATE NOW()
);

-- migrate:down

DROP TABLE hospitals;