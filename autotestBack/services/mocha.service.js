const Mocha = require('mocha');

// ,
//   fs = require('fs'),
//   path = require('path');

class MochaService {
  
  constructor(testName) {
    const TIMEOUT = 60 * 1000;
    const TESTS_DIR = 'seleniumTests\\suites';
    this.testPath = `${TESTS_DIR}\\${testName}.spec.js`;

    this.results = new Array();
    
    this.mocha = (new Mocha({
      // ui: 'bdd',
      // reporter: 'list'
      timeout: TIMEOUT.toString(),
    }))
    .addFile(this.testPath);
  }

  /**
   * 
   * @param {*} resultsArray 
   * @param {*} title 
   * @param {*} state 
   * @param {*} error 
   */
  addOneResult(resultsArray, title, state, error = null) {
    resultsArray.push({
      title,
      state,
      error
    });
    return resultsArray;
  }

  /**
   * Run mocha suites
   * Runner is wrapped in a promise
   * @returns a custom array with results
   */
  async run() {

    return new Promise((resolve, reject) => {

      this.mocha.run()
      .on('test', (test) => console.log('Test started: ' + test.title))
      .on('test end', (test) => console.log('Test done: ' + test.title))
      .on('pass', (test) => {
        console.log('Test passed', test.title + ' ' + test.state);
        this.results = this.addOneResult(
          this.results,
          test.title,
          test.state
        );
        resolve(this.results);
      })
      .on('fail', (test, err) => {
        console.log('Test fail', err);
        this.results = this.addOneResult(
          this.results,
          test.title,
          test.state,
          err
        );
        
        reject(this.results);
      })
      .on('end', () => {
        console.log('All done !');
      });
    });
        
  }
 
  /**
   * Clearing "require" Node cache to run 
   * tests in imported files multiple times
   */
  clearCache() {
    const testPath = this.testPath;
    Object.keys(require.cache).forEach(function(key) {
      if(key.includes(testPath)){
        delete require.cache[key];
        return;
      }
    });
    // delete require.cache[require.resolve(this.testPath)];
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