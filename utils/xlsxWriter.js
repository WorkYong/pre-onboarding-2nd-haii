const Excel = require('exceljs');

const writeExcelFile = async (data) => {
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("sheet1");

    if (data.length) {
        const columns = Object.keys(data[0]);

        worksheet.columns = columns.map((column) => ({
        header: column, 
        key: column, 
        }));

        worksheet.insertRows(2, data);
    }
    const filename = `치매센터${new Date().getTime()}.xlsx`;
    await workbook.xlsx.writeFile(filename); 
};

module.exports = { writeExcelFile };