-- migrate:up
CREATE TABLE hospitals (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  type_id INT NULL,
  street_address VARCHAR(100),
  address VARCHAR(100),
  latitude DECIMAL(15,12) NOT NULL,
  longitude DECIMAL(15,12) NOT NULL,
  establishment VARCHAR (30) NOT NULL,
  area FLOAT NULL,
  facility VARCHAR(100),
  doctor INT,
  nurse INT,
  social_worker INT,
  extra_people VARCHAR(100),
  operator VARCHAR(40),
  representative VARCHAR(30),
  operator_contact VARCHAR(30),
  trust VARCHAR(20),
  data LONGTEXT,
  management_contact VARCHAR(30),
  management VARCHAR(30),
  standard_date VARCHAR(30),
  province_id INT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT NOW(),
  updated_at DATETIME NULL ON UPDATE NOW(),
  FOREIGN KEY (province_id) REFERENCES provinces(id),
  FOREIGN KEY (type_id) REFERENCES types(id)
);

-- migrate:down

DROP TABLE hospitals;