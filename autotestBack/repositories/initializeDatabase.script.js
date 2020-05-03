const createStmt = [
    `CREATE TABLE IF NOT EXISTS Suite (
      suite_id INTEGER PRIMARY KEY AUTOINCREMENT,
      code TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      description TEXT NOT NULL
    );`,
    `CREATE TABLE IF NOT EXISTS Iteration (
      iteration_id INTEGER PRIMARY KEY AUTOINCREMENT,
      suite_id INTEGER FOREIGN KEY (suite_id) REFERENCES Suite (suite_id),
      date DATE,
      done INTEGER NOT NULL,
      passed INTEGER NOT NULL,
      result TEXT
    );`,
    `CREATE TABLE IF NOT EXISTS Test (
      test_id INTEGER PRIMARY KEY AUTOINCREMENT,
      suite_id INTEGER FOREIGN KEY (suite_id) REFERENCES Suite (suite_id),
      code TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      description TEXT
    );`,
    `CREATE TABLE CaseData (
      case_data_id INTEGER PRIMARY KEY AUTOINCREMENT,
      test_id INTEGER FOREIGN KEY (test_id) EFERENCES Test (test_id),
      iteration_id FOREIGN KEY (iteration_id) REFERENCES Iteration (iteration_id)
    );`,
    `CREATE TABLE IF NOT EXISTS DataType (
      data_type_id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT NOT NULL UNIQUE
    );`,
    `CREATE TABLE IF NOT EXISTS CustomData (
      custom_data_id INTEGER PRIMARY KEY AUTOINCREMENT,
      case_data_id INTEGER FOREIGN KEY (case_data_id) REFERENCES CaseData (case_data_id),
      name TEXT NOT NULL,
      value TEXT NOT NULL
    );`
  ];

module.exports = createStmt;