/**
 * **************************************************************************
 * TEST REPOSITORY
 * **************************************************************************
 */
const { formatError } = require('../../services/formatJson');
const dbConstants = require('../../constants/db.constants');

/**
 * 
 * @param {*} database 
 * @param {*} paramsInArray contains an array of objects with the following properties : 
 *                          html_name and value
 * @param {*} testId 
 */
const saveParam = async (database, paramsInArray, testId) => {

  const sql = `UPDATE ParameterValue 
  SET value = ?
  WHERE ParameterValue.parameter_value_id IN (
    SELECT pV.parameter_value_id
    FROM ParameterValue AS pV
    JOIN ParameterName AS pN ON pN.parameter_name_id = pV.parameter_name_id
    JOIN History AS h ON pV.parameter_value_id = h.parameter_value_id
    JOIN Iteration i ON i.iteration_id = h.iteration_id
    JOIN Suite s ON s.suite_id = i.suite_id
    JOIN Test t ON t.suite_id = s.suite_id
    WHERE pN.html_name = ?
    AND t.test_id = ?
    AND i.done = 0
    LIMIT 1
  );`;

  const sqlRequest = new Promise((resolve, reject) => {

    database.serialize(() => {
      database.run('begin transaction');
      console.log()
      paramsInArray.forEach((p, index) => {
        console.log([p.value, p.html_name, testId]);

        return database.run(sql, [p.value, p.html_name, testId], err => {
          if (err) reject(formatError(err))
        })
      });

      database.run("commit", err => {
        if (err) {
          reject(formatError(err));
        }
        resolve(paramsInArray.length)
      });

    });
  });

  return await sqlRequest;
}

module.exports = {
  saveParam
};