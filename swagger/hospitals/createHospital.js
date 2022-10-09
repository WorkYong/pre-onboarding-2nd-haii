/**
 * @swagger
 *  paths:
 *    /hospital:
 *      post:
 *        tags:
 *          - hospital
 *        summary: 치매센터 등록
 *        description: 대표관리자가 치매센터에 대한 데이터를 생성한다.
 *        parameters:
 *         - name: Authorization_token
 *           in: header
 *           description: "인가에 필요한 토큰"
 *           required: true
 *           schema:
 *            type: string
 *        requestBody:
 *          description: 전국치매센터표준데이터
 *          content :
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *                records:
 *                  type: object
 *                  description: "데이터"
 *                  example: [{치매센터명 : 강화군치매안심센터,
 *                            치매센터유형: 치매안심센터,
 *                            소재지도로명주소: 인천광역시 강화군 강화읍 충렬사로 26-1,
 *                            소재지지번주소: 인천광역시 강화군 남산리 324-1,
 *                            위도: 37.7372303913,
 *                            경도: 126.4847095405,
 *                            설립연월: 2019-10,
 *                            건축물면적: 485.9,
 *                            부대시설정보: 사무실(2)+프로그램실(2)+검사실(1)+가족카페(1)+대기실(1),
 *                            의사인원수: 1,
 *                            간호사인원수: 2,
 *                            사회복지사인원수: 5,
 *                            기타인원현황: 11,
 *                            운영기관명: 강화군보건소,
 *                            운영기관대표자명: 이강미,
 *                            운영기관전화번호: 032-930-4057,
 *                            운영위탁일자: '',
 *                            주요치매관리프로그램소개: 치매 무료 상담 및 무료치매검사 등,
 *                            관리기관전화번호: 032-930-4001,
 *                            관리기관명: 인천광역시 강화군청,
 *                            데이터기준일자: '2020-09-18',
 *                            제공기관코드: '3570000',
 *                            제공기관명: 인천광역시 강화군}
 *                            ]
 *        responses:
 *          '200':
 *            description: Successful operation
 *            content:
 *              application/json:
 *                schema:
 *                 type: object
 *                 properties:
 *                    message:
 *                      type: string
 *                      example: "success"
 *
 *          '400':
 *            description: 대표관리자가 아닌경우
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *                      example: "Unauthorized users"
 *          '401':
 *            description: 이미 있는 치매센터를 등록하려 하는 경우
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *                      example: "Already exist hospital name"
 */
