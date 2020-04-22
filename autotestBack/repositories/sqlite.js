
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {

  db.run(`
    CREATE TABLE IF NOT EXISTS Suite (
      suite_id INTEGER PRIMARY KEY,
      code TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      description TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS Iteration (
      iteration_id INTEGER PRIMARY KEY,
      suite_id FOREIGN KEY (suite_id) 
        REFERENCES Suite (suite_id) ON DELETE NO ACTION, ON UPDATE NO ACTION,
      date DATE,
      done INTEGER NOT NULL,
      passed INTEGER NOT NULL,
      result TEXT
    );
    CREATE TABLE IF NOT EXISTS Test (
      test_id INTEGER PRIMARY KEY,
      suite_id FOREIGN KEY (suite_id) 
        REFERENCES Suite (suite_id) ON DELETE NO ACTION, ON UPDATE NO ACTION,
      code TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      description TEXT 
    );
    CREATE TABLE CaseData (
      case_data_id INTEGER PRIMARY KEY,
      test_id FOREIGN KEY (test_id) 
        REFERENCES Test (test_id) ON DELETE NO ACTION, ON UPDATE NO ACTION,
      iteration_id FOREIGN KEY (iteration_id) 
        REFERENCES Iteration (iteration_id) ON DELETE NO ACTION, ON UPDATE NO ACTION,
    );
    CREATE TABLE IF NOT EXISTS DataType (
      data_type_id INTEGER PRIMARY KEY,
      type TEXT NOT NULL UNIQUE,
    );
    CREATE TABLE IF NOT EXISTS CustomData (
      custom_data_id INTEGER PRIMARY KEY,
      case_data_id FOREIGN KEY (case_data_id) 
        REFERENCES CaseData (case_data_id) ON DELETE NO ACTION, ON UPDATE NO ACTION,
      name TEXT NOT NULL,
      value TEXT NOT NULL
    );
  `);

  // const stmt = db.prepare(`INSERT INTO lorem VALUES (?)`);

  // for (let i = 0; i < 10; i++) {
  //   stmt.run(`Ipsum ` + i);
  // }

  // stmt.finalize();

  // db.each(`SELECT rowid AS id, info FROM lorem`, function (err, row) {
  //   console.log(err, row.id + ': ' + row.info);
  // });
});

db.close();

module.export = db;