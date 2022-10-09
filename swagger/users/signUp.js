/**
 * @swagger
 *  paths:
 *   /users:
 *     post:
 *       tags:
 *         - user sign up
 *       summary: 회원가입
 *       description: 사용자의 이름,계정,이메일,휴대폰번호,비밀번호,대표관리자여부,담당지역코드를 요청받으면 회원가입하는 api 입니다.
 *       requestBody:
 *         description: "※ 사용자의 이름의 경우 한글로 이루어져야하며 2~10자 이내로 설정했습니다.
 *           <br/>※ 사용자계정의 경우 영문과 숫자로 이루어져있으며 3~30자 이내로 설정했습니다.
 *           <br/>※ 사용자의 email의 경우'@!'가 포함되어있어야하며 '.' 이 포함되어있어야하도록 설정했습니다.
 *           <br/>※ 사용자의 핸드폰번호의 경우'-'를포함하지 않고 요청을 보냅니다.
 *           <br/> 앞자리는 01[0,6,7,8,9] 로 이루어져있어야하며 중간자리는 3자리 또는 4자리 숫자 끝자리는 4자리 숫자로 설정해두었습니다."
 *         required: true
 *         content :
 *           application/json:
 *            schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: "사용자의 이름"
 *                 example: "김코드"
 *               account:
 *                 type: string
 *                 description: "사용자의 계정"
 *                 example: "kim1234"
 *               email:
 *                 type: string
 *                 description: "사용자의 이메일"
 *                 example: "kim1442@gmail.com"
 *               phone_number:
 *                 type: string
 *                 description: "사용자의 휴대폰번호"
 *                 example: "01012341234"
 *               password:
 *                 type: string
 *                 description: "사용자의 비밀번호"
 *                 example: "a12341234"
 *               is_admin:
 *                 type: number
 *                 description: "대표관리자 여부"
 *                 example: "0"
 *               province_id:
 *                 type: string
 *                 description: "지역담당코드"
 *                 example: 4
 *       responses:
 *         '200':
 *           description: Successful operation
 *           content:
 *             application/json:
 *               schema:
 *                type: object
 *                properties:
 *                   message:
 *                     type: string
 *                     example: "user Created"
 *
 *         '400':
 *           description: "필수값이 없을경우"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Please check input data"
 *         '401':
 *           description: "중복된 유저아이디, 이메일, 휴대폰번호로 가입요청을 보낸 경우"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Already exist account or email or phone number"
 *         '402':
 *           description: "괸리자 여부에 0과 1이 아닌 다른 숫자를 넣은 경우"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "is_admin value only has 0(false) or 1(true)"
 *         '403':
 *           description: "대표관리자가 담당지역을 선택하고 요청한경우"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "admin can't has province id"
 *         '404':
 *           description: "담당자 회원가입시 존재하지 않는 지역번호를 넣어 요청보낸 경우"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Not exist province_id"
 *         '405':
 *           description: "담당자 회원가입시 지역선택을 안하고 요청보낸경우"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Please select province"
 *         '406':
 *           description: "이메일 형식이 다를경우"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Please match the e-mail format"
 *         '407':
 *           description: "핸드폰 번호에 -를 넣어 요청을 보낼경우"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "phone_number is only number"
 *         '408':
 *           description: "전화번호 형식이 다를경우"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Please match phone_number format"
 */
