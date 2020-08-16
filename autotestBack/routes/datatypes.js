// Server
const express = require('../node_modules/express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Repository
const database = require('../db/repositories/database');
const datatypeRepository = require('../db/repositories/dataType.repository');

/**
 * Get all dataTypes.
 */
router.get('/get-all', async (req, res, next) => {
	const result = await datatypeRepository.getAll(database);

	if (result.error) {
		res.status(400).json(result);
		return;
	}
	res.status(200).json(result);
});

module.exports = router;
