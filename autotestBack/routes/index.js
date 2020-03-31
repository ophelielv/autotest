const express = require('../node_modules/express');
const router = express.Router();
const Mocha = require('mocha');

const TESTS_DIR = 'suites';

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
  const mocha = new Mocha({
    ui: 'bdd',
    reporter: 'list'
  });

  mocha.addFile(`${TESTS_DIR}/test2.spec.js`);

  mocha.run(/*function (failures) {
    process.exitCode = failures ? 1 : 0;  // exit with non-zero status if there were failures
  }*/)
    .on('test', function (test) {
      console.log('Test started: ' + test.title);
    })
    .on('test end', function (test) {
      console.log('Test done: ' + test.title);
    })
    .on('pass', function (test) {
      console.log('Test passed');
      // console.log(test);
    })
    .on('fail', function (test, err) {
      console.log('Test fail');
      // console.log(test);
      // console.log(err);
    })
    .on('end', function () {
      console.log('All done');
    });


  res.render('index', { title: 'Users' });
});

module.exports = router;

// const { Builder, By, Key, until } = require('selenium-webdriver');
// const { expect } = require('chai');

// ,
//   fs = require('fs'),
//   path = require('path');

/* EXEMPLE WITH MULTIPLE TESTS FILES
// Add each .js file to the mocha instance
// Only keep the .js files
fs.readdirSync(TESTS_DIR).filter(file => file.substr(-3) === '.js')
.forEach(file => {
  mocha.addFile(
    path.join(TESTS_DIR, file)
  );
});

mocha.run(function (failures) {
  process.exitCode = failures ? 1 : 0;  // exit with non-zero status if there were failures
});*/