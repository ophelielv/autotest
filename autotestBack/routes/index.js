const express = require('../node_modules/express');
const router = express.Router();
const MochaService = require('../services/mocha.service');

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

module.exports = router;