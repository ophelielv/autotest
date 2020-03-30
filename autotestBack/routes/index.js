var express = require('../node_modules/express');
var router = express.Router();
// const { Builder, By, Key, until } = require('selenium-webdriver');
// const { expect } = require('chai');

const Mocha = require('mocha'),
  fs = require('fs'),
  path = require('path');

// Instantiate a Mocha instance.
const mocha = new Mocha();
const testDir = 'suites'

/* EXEMPLE WITH MULTIPLE TESTS FILES
// Add each .js file to the mocha instance
// Only keep the .js files
fs.readdirSync(testDir).filter(file => file.substr(-3) === '.js')
.forEach(file => {
  mocha.addFile(
    path.join(testDir, file)
  );
});

mocha.run(function (failures) {
  process.exitCode = failures ? 1 : 0;  // exit with non-zero status if there were failures
});*/

// GET home page.
router.get('/', function (req, res, next) {
  const obj = {
    a: 1,
    b: 54
  };

  const { a, b } = obj;

  res.render('index', { title: `Express ${a} ${b}` });
});



// GET users page.
router.get('/users', function (req, res, next) {
  // Add one file
  mocha.addFile(`${testDir}/test2.spec.js`);

  mocha.run(function (failures) {
    process.exitCode = failures ? 1 : 0;  // exit with non-zero status if there were failures
  });

  res.render('index', { title: 'Users' });
});

module.exports = router;