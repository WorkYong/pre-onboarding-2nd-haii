/**
* @swagger
*
* /hospital/download:
*  get:
*    summary: "검색 & 조회한 치매센터 리스트 엑셀 다운로드"
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
*    description: "엑셀파일로 다운로드"
*    tags: [Download Hospital List]
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
*        description: 정상 요청일 경우 치매센터 리스트 엑셀파일 다운로드
*        content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                  status:
*                    type: number
*                    example: 200
*                  message:
*                    type: string
*                    example: "success"
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