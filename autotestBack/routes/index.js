const express = require('../node_modules/express');
const router = express.Router();
const MochaService = require('../services/mocha.service');

const bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/**
 * GET home page.
 */
router.get('/', (req, res, next) => {
  res.render('index', { title: `Express home` });
});

/**
 * GET users page.
 */
router.get('/users', async (req, res, next) => {
  const mochaService = new MochaService('test1');
  const results = await mochaService.run();
  console.log('RESULT: ', results);

  res.render('index', { title: 'Users ' + JSON.stringify(results) });
});

/**
 * Get the list of all tests
 */
router.get("/get-all/", (req, res, next) => {
  res.json({ message: `get test id: ${req.params.id}` });
});

/**
 * Get info about a test suite + previous results
 */
router.get("/get/:id", (req, res, next) => {
  res.json({ message: `Get test id: ${req.params.id}` });
});

/**
 * Launch a test 
 */
router.put("/launch", (req, res, next) => {
  console.log(req.body)
  res.json({ message: `Launch test id: ${req.body.id}` });
});

/**
 * Update a suite 
 */
router.put("/update", (req, res, next) => {
  console.log(req.body)
  res.json({ message: `Update suite id: ${req.body.id}` });
});

/**
 * Delete a suite
 */
router.delete("/delete/:id", (req, res, next) => {
  res.json({ message: `Delete suite id: ${req.params.id}` });
});

module.exports = router;