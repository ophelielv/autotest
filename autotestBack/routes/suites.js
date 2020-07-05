// Server
const express = require('../node_modules/express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Repository
const database = require('../db/repositories/database');
const suiteRepository = require('../db/repositories/suite.repository');

/**
 * Get all suites.
 */
router.get('/get-all-short', async (req, res, next) => {
	const result = await suiteRepository.getAllShort(database);

	if (result.error) {
		res.status(400).json(result);
		return;
	}
	res.status(200).json(result);
});

/**
 * Get info about a test suite + previous results
 */
router.get('/get/:id', async (req, res, next) => {
	const result = await suiteRepository.getById(database, id);

	if (result.error) {
		res.status(400).json(result);
		return;
	}
	res.status(200).json(result);
});

module.exports = router;
