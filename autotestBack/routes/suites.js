// Server
const express = require('../node_modules/express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Repository
const database = require('../db/repositories/database');
const suiteRepository = require('../db/repositories/suite.repository');

// Selenium test
const MochaService = require('../services/mocha.service');

/**
 * Get all suites.
 */
router.get('/get-all-short', async (req, res, next) => {
	try {
		const result = await suiteRepository.getAllShort(database);
		if (result.error) {
			res.status(400).json(result);
			return;
		}
		res.status(200).json(result);
	} catch (err) {
		console.log(error);
	}
});

/**
 * Get info about a test suite + previous results
 */
router.get('/get/:id', async (req, res, next) => {
	try {
		const result = await suiteRepository.getByColumn(
			database,
			'suite_id',
			req.params.id,
			true
		);
		if (result.error) {
			res.status(400).json(result);
			return;
		}
		res.status(200).json(result);
	} catch (err) {
		console.log(err);
	}
});

/**
 * Get info about a test suite + previous results
 */
router.get('/launch/:code', async (req, res, next) => {
	// try {
	// 	const result = await suiteRepository.getByColumn(
	// 		database,
	// 		'code',
	// 		req.params.code,
	// 		false
	// 	);
	// 	const suite = JSON.parse(result.suite);
	// 	console.log(' --- ', suite, ' **** ');
	// 	suite.tests.map(test => console.log(test.parameters));
	try {
		const mochaService = new MochaService('test1');
		const results = await mochaService.run();
		mochaService.clearCache();
		console.log('RESULT: ', results);
		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}

	// if (result.error) {
	//   res.status(400).json(result.suite);
	//   return;
	// }
	// res.status(200).json(result);
});

module.exports = router;
