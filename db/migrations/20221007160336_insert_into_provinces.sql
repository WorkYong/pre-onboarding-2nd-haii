-- migrate:up
INSERT INTO provinces (name) 
  VALUES ("서울특별시"),("경기도"),("인천광역시"),("강원도"),
         ("충청남도"),("충청북도"),("대전광역시"),("경상북도"),
         ("경상남도"),("전라북도"),("전라남도"),("부산광역시"),
         ("울산광역시"),("대구광역시"),("광주광역시"),("세종특별자치시"),("제주특별자치도")

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE provinces;
SET FOREIGN_KEY_CHECKS = 1;
