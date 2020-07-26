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
 * @param {*} getComplete = get all data for this suite, description and all iterations included
 */
const getByColumn = async (
	database,
	columnName,
	columnValue,
	getComplete = true
) => {
	const sql = `SELECT json_object(
      'id', s.suite_id, 
      'code', s.code,
      ${getComplete ? `'description', s.description,` : ``}
      'tests', (
        SELECT json_group_array(json_object(
          'id', t.test_id,
          'num_order', t.num_order,
          'code', t.code,
          'name', t.name,
          ${getComplete ? `'description', t.description,` : ``}
          'parameters', (
            SELECT json_group_array(json_object(
              'id', pn.parameter_name_id,
              'name', pn.name,
              'value', ( SELECT pv.value FROM ParameterValue pv 
                         WHERE pv.parameter_name_id = pn.parameter_name_id
                         ORDER BY pv.parameter_value_id DESC ),
              'datatype', ( SELECT d.name FROM DataType d WHERE d.data_type_id = pn.data_type_id)
            )) FROM ParameterName pn WHERE pn.test_id = t.test_id
          )
        ))  FROM Test t WHERE t.suite_id = s.suite_id
      ),
      ${
				getComplete
					? `'iterations', (
          SELECT json_group_array(json_object(
            'id', i.iteration_id,
            'date', i.date,
            'done', i.done,
            'passed', i.passed,
            'result', i.result
          )) FROM Iteration i WHERE i.suite_id = s.suite_id
        ),
        `
					: ``
			}
      'name', s.name
  ) suite FROM Suite s WHERE s.${columnName} = ?;`;

	const params = [columnValue];

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
	getByColumn,
};
