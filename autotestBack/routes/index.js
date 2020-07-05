// Server
const express = require('../node_modules/express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// Selenium test
const MochaService = require('../services/mocha.service');

// const md5 = require('md5');
// db.run(insert, ["admin", "admin@example.com", md5("admin123456")]);

/**
 * GET home page.
 */
router.get('/', (req, res, next) => {
	res.render('index', { title: `Express home` });
});

/**
 * GET users page.
 */
router.get('/test1', async (req, res, next) => {
	const mochaService = new MochaService('test1');
	const results = await mochaService.run();
	mochaService.clearCache();
	console.log('RESULT: ', results);

	res.render('index', { title: 'Test1 ' + JSON.stringify(results) });
});



/**
 * Launch a test
 */
router.put('/launch', (req, res, next) => {
	console.log(req.body);
	res.status(200).json({ message: `Launch test id: ${req.body.id}` });
});

/**
 * Update a suite
 */
router.put('/update', (req, res, next) => {
	console.log(req.body);
	res.status(200).json({ message: `Update suite id: ${req.body.id}` });
});

/**
 * Delete a suite
 */
router.delete('/delete/:id', (req, res, next) => {
	res.status(200).json({ message: `Delete suite id: ${req.params.id}` });
});

module.exports = router;
