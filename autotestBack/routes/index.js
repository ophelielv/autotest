// Server
const express = require('../node_modules/express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// Selenium test
const MochaService = require('../services/mocha.service');
// Repository
const database = require('../repositories/database');
const suiteRepository = require('../repositories/suite.repository');
const dataTypeRepository = require('../repositories/dataType.repository');

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
router.get('/users', async (req, res, next) => {

  const mochaService = new MochaService('test1');
  const results = await mochaService.run();
  console.log('RESULT: ', results);

  res.render('index', { title: 'Users ' + JSON.stringify(results) });
});

/**
 * Get all dataTypes.
 */
router.get("/datatypes/get-all", async (req, res, next) => {
  const result = await dataTypeRepository.getAll(database);

  if(result.error){
    res.status(400).json(result);
    return;
  }
  res.json(result);
});

/**
 * Get all suites.
 */
router.get("/suites/get-all", async (req, res, next) => {
  const result = await suiteRepository.getAllShort(database);

  if(result.error){
    res.status(400).json(result);
    return;
  }
  res.json(result);
});

/**
 * Get info about a test suite + previous results
 */
router.get("/suite/get/:id", async (req, res, next) => {
  const result = await suiteRepository.getById(database, id);

  if(result.error){
    res.status(400).json(result);
    return;
  }
  res.json(result);
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