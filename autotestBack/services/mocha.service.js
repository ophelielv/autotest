const Mocha = require('mocha');
// ,
//   fs = require('fs'),
//   path = require('path');

class MochaService {

  constructor(testName) {

    const TESTS_DIR = 'suites';
    this.mocha = new Mocha(/*{
      ui: 'bdd',
      reporter: 'list'
    }*/);

    this.mocha.addFile(`${TESTS_DIR}/${testName}.spec.js`);
  }

  run() {
    this.mocha.run(/*function (failures) {
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
      })
      ;
  }

}

module.exports = MochaService;

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