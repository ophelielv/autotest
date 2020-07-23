/**
 * **************************************************************************
 * SUITE REPOSITORY
 * **************************************************************************
 */
const { formatError } = require('../../services/formatJson');

/**
 *
 * @param {*} database
 */
const getAllShort = async database => {
	const sql = `SELECT suite_id, name FROM Suite`;
	const params = [];

	const sqlRequest = new Promise((resolve, reject) => {
		database.all(sql, params, (err, rows) => {
			if (err) {
				reject(formatError(err));
			}
			resolve(rows);
		});
	});

	return await sqlRequest;
};

/**
 *
 * @param {*} database
 */
const getAll = async database => {
	const sql = `SELECT * FROM Suite`;
	const params = [];

	const sqlRequest = new Promise((resolve, reject) => {
		database.all(sql, params, (err, rows) => {
			if (err) {
				reject(formatError(err));
			}
			resolve(rows);
		});
	});

	return await sqlRequest;
};

/**
 *
 * @param {*} database
 * @param {*} id
 */
const getById = async (database, id) => {
	const sql = `SELECT json_object(
      'id', s.suite_id, 
      'code', s.code,
      'name', s.name,
      'description', s.description,
      'tests', (
        SELECT json_group_array(json_object(
          'id', t.test_id,
          'num_order', t.num_order,
          'code', t.code,
          'name', t.name,
          'description', t.description,
          'parameters', (
            SELECT json_group_array(json_object(
              'id', pn.parameter_name_id,
              'name', pn.name,
              'value', ( SELECT pv.value FROM ParameterValue pv WHERE pv.parameter_name_id = pn.parameter_name_id)
            )) FROM ParameterName pn WHERE pn.test_id = t.test_id
          )
        ))  FROM Test t WHERE t.suite_id = s.suite_id
      ),
      'iterations', (
        SELECT json_group_array(json_object(
        'id', i.iteration_id,
        'date', i.date,
        'done', i.done,
        'passed', i.passed,
        'result', i.result
        )) FROM Iteration i WHERE i.suite_id = s.suite_id
      )
  ) suite FROM Suite s WHERE s.suite_id = ?;`;

	const params = [id];

	const sqlRequest = new Promise((resolve, reject) => {
		database.get(sql, params, (err, rows) => {
			if (err) {
				reject(formatError(err));
			}
			resolve(rows);
		});
	});

	return await sqlRequest;
};

module.exports = {
	getAll,
	getAllShort,
	getById,
};
