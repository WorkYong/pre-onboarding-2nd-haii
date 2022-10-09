# 주식회사 하이 - Admin용 데이터 관리 프로그램 만들기
![JavaScript Badge](https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)&nbsp;
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white"/>&nbsp;
## 🏥 개요
원티드 프리온보딩 백엔드 코스 2차 과제 입니다. 

전국치매센터표준데이터 JSON 데이터 파일을 데이터베이스에 저장하고
데이터를 조회해서 엑셀 파일로 다운로드하는 어플리케이션 입니다.

어플리케이션 기능을 이용하기 위한 회원가입 기능부터 데이터베이스 저장 및 조회, 엑셀 다운로드까지의 모든 프로세스를 구현했습니다.

- 개발기간: 2022.10.07 - 2022.10.10 (3일)
- 개발인원: 김윤희, 박정용, 오인환, 음정민(PM), 전준영 (6명)



## 🏥 프로젝트 실행 방법

- 사전에 Git, node, MySQL이 설치되어있어야 합니다.

```shell
# 레포지토리 클론
$ git clone https://github.com/J-EUM/pre-onboarding-2nd-haii.git

# 접속
$ cd pre-onboarding-2nd-haii

# 패키지 설치
$ npm install

# 데이터베이스 생성
mysql> create database 데이터베이스명 character set utf8mb4 collate utf8mb4_general_ci; 

# .env파일 만들기
DATABASE_URL = mysql://계정:비밀번호@호스트주소:포트번호/데이터베이스명
TYPEORM_CONNECTION = mysql
TYPEORM_HOST = 호스트주소
TYPEORM_PORT = 포트번호
TYPEORM_USERNAME = 계정
TYPEORM_PASSWORD = 비밀번호
TYPEORM_DATABASE = 데이터베이스명
TYPEORM_LOGGING = TRUE
jwt_secret_key = 토큰용 시크릿키

# 데이터베이스 테이블 생성
$ npx dbmate up

# 프로젝트 실행
$ node server.js

# server start : http://localhost:8000
```


## 🏥 프로젝트 구조
### DB모델링

![image](https://user-images.githubusercontent.com/97498663/194755019-8853c093-1a1d-43a0-a4cf-3c5b404d0511.png)



## 🏥 구현 기능에 대한 소개

### 1. 회원가입 기능

---

- 각 API 테스트 시 필요한 상세 이용 방법
- 선택 사항 구현 시, 구현 방법과 이유에 대한 간략한 설명
- 기능 구현 시 어려웠던 점과 그에 대한 해결 방안을 모색하기 위해 노력한
점(특정 키워드를 가지고 검색했다, 공식 문서를 참조했다 등)

### 2. 로그인 기능

---

#### 2-1. 필수 구현

- 각 API 테스트 시 필요한 상세 이용 방법
- 선택 사항 구현 시, 구현 방법과 이유에 대한 간략한 설명
- 기능 구현 시 어려웠던 점과 그에 대한 해결 방안을 모색하기 위해 노력한
점(특정 키워드를 가지고 검색했다, 공식 문서를 참조했다 등)

### 3. 회원 정보 수정 기능

---

- 각 API 테스트 시 필요한 상세 이용 방법
- 선택 사항 구현 시, 구현 방법과 이유에 대한 간략한 설명
- 기능 구현 시 어려웠던 점과 그에 대한 해결 방안을 모색하기 위해 노력한
점(특정 키워드를 가지고 검색했다, 공식 문서를 참조했다 등)

### 4. JSON 데이터 파싱 후, 데이터베이스 저장

---

- 각 API 테스트 시 필요한 상세 이용 방법
- 선택 사항 구현 시, 구현 방법과 이유에 대한 간략한 설명
- 기능 구현 시 어려웠던 점과 그에 대한 해결 방안을 모색하기 위해 노력한
점(특정 키워드를 가지고 검색했다, 공식 문서를 참조했다 등)

### 5. 엑셀 다운로드 기능

---

- 각 API 테스트 시 필요한 상세 이용 방법
- 선택 사항 구현 시, 구현 방법과 이유에 대한 간략한 설명
- 기능 구현 시 어려웠던 점과 그에 대한 해결 방안을 모색하기 위해 노력한
점(특정 키워드를 가지고 검색했다, 공식 문서를 참조했다 등)

## 🏥 API doc

서버를 열고 접속
```shell
$ node server.js
```
http://localhost:8000/api-docs
