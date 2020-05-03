/**
 * **************************************************************************
 * SUITE REPOSITORY
 * **************************************************************************
 */
const { formatError} = require('../services/formatJson');

/**
 * 
 * @param {*} database 
 */
const getAllShort = async (database) => {
  const sql = `SELECT suite_id, name FROM Suite`;
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

/**
 * 
 * @param {*} database 
 */
const getAll = async (database) => {
  const sql = `SELECT * FROM Suite`;
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

/**
 * 
 * @param {*} database 
 * @param {*} id 
 */
const getById = async (database, id) => {
  const sql = `SELECT * FROM Suite WHERE suite_id=?`;
  const params = [id];
  
  const sqlRequest = new Promise ((resolve, reject) => {
    database.all(sql, params, (err, rows) => {
      if (err) {
        reject(formatError(err));
      }
      resolve(rows);
    });
  });

  return await sqlRequest;
}

module.exports = {
    getAll,
    getAllShort,
    getById
};