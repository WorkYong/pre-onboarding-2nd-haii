const { myDataSource } = require("./common");

const getUserByAccount = async (account) => {
    const [ user ] = await myDataSource.query(`
        SELECT
        * FROM users
        WHERE account = ?`, [account]);
    return user;      
};

module.exports = {
    getUserByAccount,
    };