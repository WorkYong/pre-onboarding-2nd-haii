/**
* @swagger
*  paths:
*   /users:
*     patch:
*       tags:
*         - user update
*       summary: 회원 정보 수정 기능
*       description: 대표 관리자는 자신 또는 지역별 담당자의 이름, 전화번호, 담당 지역을 수정할 수 있습니다. 단, 대표 관리자는 특정 담당 지역을 가지고 있지 않습니다.
*       requestBody:
*         description: "<h4>header.authorization에 사용자 토큰값과 함께 요청 들어와야 합니다.</h4>"
*         required: true
*         content :
*           application/json:
*            schema:
*             type: object
*             properties:
*               user_id:
*                 type: number
*                 description: "수정할 사용자의 고유 id 값"
*                 example: 1
*               name:
*                 type: string
*                 description: "수정할 사용자의 이름"
*                 example: "김코드"
*               phone_number:
*                 type: string
*                 description: "수정할 사용자의 휴대폰 번호"
*                 example: "01012345678"
*               province_id:
*                 type: number
*                 description: "수정할 사용자의 지역 번호"
*                 example: 2
*       responses:
*         '200':
*           description: "성공적으로 업데이트를 했을 경우"
*           content:
*             application/json:
*               schema:
*                type: object
*                properties:
*                   message:
*                     type: string
*                     example: "success_userUpdate"
*
*         '403':
*           description: "관리자 권한을 가진 사용자가 아닐 경우"
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   message:
*                     type: string
*                     example: "NOT_ADMIN"
*         '400':
*           description: "필수값이 들어오지 않았을 경우"
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   message:
*                     type: string
*                     example: "${key} 이/가 없습니다"
*         '404':
*           description: "휴대폰 번호가 중복인 경우"
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   message:
*                     type: string
*                     example: "USER_PHONE_NUMBER_DUPLICATE"
*/