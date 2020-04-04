const express = require('../node_modules/express');
const router = express.Router();
const MochaService = require('../services/mocha.service');

/**
 * GET home page.
 */
router.get('/', function (req, res, next) {
  res.render('index', { title: `Express home` });
});

/**
 * GET users page.
 */
router.get('/users', function (req, res, next) {
  const mochaService = new MochaService('test1');
  mochaService.run();

  res.render('index', { title: 'Users' });
});

module.exports = router;