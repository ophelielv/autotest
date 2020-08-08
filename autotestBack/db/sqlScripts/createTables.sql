-----------------------------------------------------------------------------------------------
-- Tables -------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

-- SUITE: Main table
CREATE TABLE IF NOT EXISTS Suite (
    suite_id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT NOT NULL
);

-- TEST: One suite has one or many tests
CREATE TABLE IF NOT EXISTS Test (
    test_id INTEGER PRIMARY KEY AUTOINCREMENT,
    suite_id INTEGER, 
    code TEXT,
    num_order INTEGER,
    name TEXT NOT NULL,
    description TEXT,
    FOREIGN KEY (suite_id) REFERENCES Suite (suite_id)
);

-- PARAMETERNAME, PARAMETERVALUE: Each test can be set up with parameters. Their names and
-- values are stored in two tables
CREATE TABLE IF NOT EXISTS ParameterName (
    parameter_name_id INTEGER PRIMARY KEY AUTOINCREMENT,
    data_type_id INTEGER, 
    test_id INTEGER,
    label TEXT NOT NULL,
    html_name TEXT NOT NULL,
    FOREIGN KEY (data_type_id) REFERENCES DataType (data_type_id),
    FOREIGN KEY (test_id) REFERENCES TEST (test_id)
);

CREATE TABLE IF NOT EXISTS ParameterValue (
    parameter_value_id INTEGER PRIMARY KEY AUTOINCREMENT,
    parameter_name_id INTEGER,
    value TEXT NOT NULL,
    FOREIGN KEY (parameter_name_id) REFERENCES ParameterName (parameter_name_id)
);

-- DATATYPE: A parameter can be a string, a date or an integer
CREATE TABLE IF NOT EXISTS DataType (
    data_type_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

-- ITERATION: keep track of each launches of a suite and the result
CREATE TABLE IF NOT EXISTS Iteration (
    iteration_id INTEGER PRIMARY KEY AUTOINCREMENT,
    suite_id INTEGER,
    date DATE,
    done INTEGER NOT NULL,
    passed INTEGER NOT NULL,
    result TEXT,
    FOREIGN KEY (suite_id) REFERENCES Suite (suite_id)
);

-- HISTORY: keep track of the value of the parameters for each iteration
CREATE TABLE History (
    history_id INTEGER PRIMARY KEY AUTOINCREMENT,
    parameter_value_id INTEGER,
    iteration_id INTEGER,
    FOREIGN KEY (parameter_value_id) REFERENCES ParameterValue (parameter_value_id),
    FOREIGN KEY (iteration_id) REFERENCES Iteration (iteration_id)
);

-----------------------------------------------------------------------------------------------
-- Inital data --------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------
INSERT INTO DataType (data_type_id, name) VALUES(1, 'text');
INSERT INTO DataType (data_type_id, name) VALUES(2, 'date');
INSERT INTO DataType (data_type_id, name) VALUES(3, 'number');
INSERT INTO DataType (data_type_id, name) VALUES(4, 'password'); -- must be encoded