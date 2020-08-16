// Server
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Repository
const database = require('../db/repositories/database');
const testRepository = require('../db/repositories/test.repository');

// Service
const testParamsService = require('../services/testParams.service')

/**
 * Save one test
 */
router.post('/save/:testId', async (req, res, next) => {
  try {
    const paramsInArray = testParamsService.paramsToArray(req.body);
    const result = await testRepository.saveParam(database, paramsInArray, req.params.testId);
    if (result.error) {
      res.status(400).json(result);
      return;
    }
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
