const Excel = require('exceljs');

const writeExcelFile = async (data) => {
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("sheet1");

    const columns = Object.keys(data[0]);

    worksheet.columns = columns.map((column) => ({
    header: column, // 컬럼 이름
    key: column, // data에서 컬럼의 값을 구분하기 위한 key
    }));

    // 두 번째 줄부터 데이터 행들을 한꺼번에 입력
    worksheet.insertRows(2, data);

    const filename = `temp${new Date().getTime()}.xlsx`;
    await workbook.xlsx.writeFile(filename); 
};

module.exports = { writeExcelFile };