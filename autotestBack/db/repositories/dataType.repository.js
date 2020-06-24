/**
 * **************************************************************************
 * DATATYPE REPOSITORY
 * **************************************************************************
 */
const { formatError} = require('../../services/formatJson');

/**
 * 
 * @param {*} database 
 */
const getAll = async (database) => {
  const sql = `SELECT * FROM Datatype`;
  const params = [];

  const sqlRequest = new Promise( (resolve, reject) => {
    database.all(sql, params, (err, rows) => {
      if (err) {
        reject(formatError(err));
      } 
      resolve(rows)
   });
  });

  return await sqlRequest;
}

module.exports = {
    getAll
};