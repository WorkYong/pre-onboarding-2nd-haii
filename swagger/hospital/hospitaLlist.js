/**
* @swagger
*
* /hospital:
*  get:
*    summary: "치매센터 리스트 검색 & 조회 기능"
*    parameters:
*       - in: header
*         name: Authorization
*         description: "인가에 필요한 토큰"
*         required: true
*         schema:
*          type: string
*       - in: query
*         name: name
*         schema:
*          type: string
*         description: 치매센터명 검색(단어 부분검색)
*       - in: query
*         name: representative
*         schema:
*           type: string
*         description: 운영기관대표자명 검색(단어 부분검색)
*       - in: query
*         name: operatorcontact
*         schema:
*           type: string
*         description: 운영기관전화번호 검색(단어 부분검색)
*       - in: query
*         name: type
*         schema:
*           type: string
*         description: 치매센터유형 검색(모든단어일치)
*       - in: query
*         name: doctor
*         schema:
*           type: integer
*         description: 의사 수가 해당숫자 이상인 센터 검색
*       - in: query
*         name: nurse
*         schema:
*           type: integer
*         description: 간호사 수가 해당숫자 이상인 센터 검색
*       - in: query
*         name: socialworker
*         schema:
*           type: integer
*         description: 사회복지사 수가 해당숫자 이상인 센터 검색
*
*    description: "본인의 담당지역만 조회 가능"
*    tags: [View Hospital List]
*    responses:
*      400:
*        description: 관리자에게 담당지역이 있을때 / 관리자가 아닌데 담당지역이 없을때
*        content:
*          application/json:
*            schema:
*              oneOf:
*                - $ref: '#/components/schemas/adminwprovince'
*                - $ref: '#/components/schemas/noadminwoprovince'
*              examples:
*                adminwprovince:
*                  summary: 관리자에게 담당지역이 있을때
*                  value:
*                    status: 400
*                    message: "admin cannot have province_id"
*                noadminwoprovince:
*                  summary: 관리자가 아닌데 담당지역이 없을때
*                  value:
*                    status: 400
*                    message: "province_id not provided"
*              
*      200:
*        description: 정상 요청일 경우 치매센터 리스트 반환
*        content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                  status:
*                    type: number
*                    example: 200
*                  data:
*                    type: array
*                    items:
*                      type: object
*                      properties:
*                        "치매센터명":
*                          type: string
*                          example: "강화군치매안심센터"
*                        "치매센터유형":
*                          type: string
*                          example: "치매안심센터"
*                        "소재지도로명주소":
*                          type: string
*                          example: "인천광역시 강화군 강화읍 충렬사로 26-1"
*                        "위도":
*                          type: string
*                          format: number
*                          example: "37.737230391300"
*                        "경도":
*                          type: string
*                          format: number
*                          example: "126.484709540500"
*                        "설립연월":
*                          type: string
*                          example: "2019-10"
*                        "건축물면적":
*                          type: number
*                          example: 485.9
*                        "부대시설정보":
*                          type: string
*                          example: "사무실(2)+프로그램실(2)+검사실(1)+가족카페(1)+대기실(1)"
*                        "의사인원수":
*                          type: integer
*                          example: 1
*                        "간호사인원수":
*                          type: integer
*                          example: 2
*                        "사회복지사인원수":
*                          type: integer
*                          example: 5
*                        "기타인원현황":
*                          type: string
*                          example: "11"
*                        "운영기관명":
*                          type: string
*                          example: "강화군보건소"
*                        "운영기관대표자명":
*                          type: string
*                          example: "이강미"
*                        "운영기관전화번호":
*                          type: string
*                          example: "032-930-4057"
*                        "운영위탁일자":
*                          type: string
*                          example: ""
*                        "주요치매관리프로그램소개":
*                          type: string
*                          example: "치매 무료 상담 및 무료치매검사 등"
*                        "관리기관전화번호":
*                          type: string
*                          example: "032-930-4001"
*                        "관리기관명":
*                          type: string
*                          example: "인천광역시 강화군청"
*                        "데이터기준일자":
*                          type: string
*                          example: "2020-09-18"
*                    
*                 
*                    
* 
* components:
*   schemas:
*     adminwprovince:
*       type: object
*       properties:
*         status:
*           type: number
*           example: 400
*         message:
*           type: string
*           example: "admin cannot have province_id"
*     noadminwoprovince:
*       type: object
*       properties:
*         status:
*           type: number
*           example: 400
*         message:
*           type: string
*           example: "province_id not provided"
*                 
 */