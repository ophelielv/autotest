const Mocha = require('mocha');

// ,
//   fs = require('fs'),
//   path = require('path');

class MochaService {
	constructor(testName) {
		const TIMEOUT = 60 * 1000;
		const TESTS_DIR = 'seleniumTests\\suites';
		this.testPath = `${TESTS_DIR}\\${testName}.spec.js`;

		// this.results = new Array();

		this.mocha = new Mocha({
			// ui: 'bdd',
			// reporter: 'list'
			timeout: TIMEOUT.toString(),
		}).addFile(this.testPath);
	}

	/**
	 *
	 * @param {*} resultsArray
	 * @param {*} title
	 * @param {*} state
	 * @param {*} error
	 */
	setOneResult(title, state, error = null) {
		return {
			title,
			state,
			error,
		};
	}

	/**
	 * Run mocha suites
	 * Runner is wrapped in a promise
	 * @returns a custom array with results
	 */
	async run() {
		return new Promise((resolve, reject) => {
			let stats = {
				total: 0,
				passed: 0,
				errors: 0,
			};
			let successes = [];
			let errors = [];

			this.mocha
				.run()
				.on('test', test => {
					stats.total = ++stats.total;
					console.log('* Test started: ' + test.title);
				})
				.on('test end', test => console.log('* Test done: ' + test.title))
				.on('pass', test => {
					console.log('* Test passed', test.title + ' ' + test.state);
					stats.passed = ++stats.passed;
					successes.push(this.setOneResult(test.title, test.state));
				})
				.on('fail', (test, err) => {
					console.log('* Test fail', err);
					stats.errors = ++stats.errors;
					errors.push(this.setOneResult(test.title, test.state, err));
				})
				.on('end', () => {
          console.log('All done !');

          // TODO : save iteration data + history

					resolve({
						stats,
						successes,
            errors,
            // TODO : params
					});
				});
		});
	}

	/**
	 * Clearing "require" Node cache to run
	 * tests in imported files multiple times
	 */
	clearCache() {
		const testPath = this.testPath;
		Object.keys(require.cache).forEach(function (key) {
			if (key.includes(testPath)) {
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
