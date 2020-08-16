-- SUITE
INSERT INTO Suite (suite_id, code, name, description) VALUES(
    1,
    'ST1',
    'Suite 1',
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
);


-- TEST
INSERT INTO Test (test_id, suite_id, code, num_order, name, description) VALUES(
    1, 1, 'T1', 1,
    'First test', 
    'Description' 
);

INSERT INTO Test (test_id, suite_id, code, num_order, name, description) VALUES(
    2, 1, 'T2', 2, 
    'Second test', 
    'Description' 
);

INSERT INTO Test (test_id, suite_id, code, num_order, name, description) VALUES(
    3, 1, 'T3', 3,
    'Third test', 
    'Description' 
);

-- PARAMETERNAME
-- Test 1
INSERT INTO ParameterName (parameter_name_id, data_type_id, test_id, label, html_name) VALUES(1, 1, 1, 'Login', 'login');
INSERT INTO ParameterName (parameter_name_id, data_type_id, test_id, label, html_name) VALUES(2, 4, 1, 'Password', 'password');

-- Test 2
INSERT INTO ParameterName (parameter_name_id, data_type_id, test_id, label, html_name) VALUES(3, 3, 2, 'chip number', 'chip-number');
INSERT INTO ParameterName (parameter_name_id, data_type_id, test_id, label, html_name) VALUES(4, 1, 2, 'set', 'set');
INSERT INTO ParameterName (parameter_name_id, data_type_id, test_id, label, html_name) VALUES(5, 1, 2, 'table', 'table');
INSERT INTO ParameterName (parameter_name_id, data_type_id, test_id, label, html_name) VALUES(6, 2, 2, 'production date', 'production-date');

-- Test 3
INSERT INTO ParameterName (parameter_name_id, data_type_id, test_id, label, html_name) VALUES(7, 1, 3, 'address', 'address');
INSERT INTO ParameterName (parameter_name_id, data_type_id, test_id, label, html_name) VALUES(8, 3, 3, 'number', 'number');
INSERT INTO ParameterName (parameter_name_id, data_type_id, test_id, label, html_name) VALUES(9, 1, 3, 'road', 'road');
INSERT INTO ParameterName (parameter_name_id, data_type_id, test_id, label, html_name) VALUES(10, 1, 3, 'city', 'city');

-- PARAMETERVALUE
INSERT INTO ParameterValue (parameter_value_id, parameter_name_id, value) VALUES(1, 1, 'gilbert.davros@gmail.com');
INSERT INTO ParameterValue (parameter_value_id, parameter_name_id, value) VALUES(2, 2, 'gidav2019');

-- ITERATION
INSERT INTO Iteration (iteration_id, suite_id, date, done, passed, result) VALUES (
    1, 1, datetime('now'), 1, 0, NULL
);
INSERT INTO Iteration (iteration_id, suite_id, date, done, passed, result) VALUES (
    2, 1, datetime('now'), 0, 0, NULL
);


-- History
INSERT INTO HISTORY (history_id, parameter_value_id, iteration_id) VALUES (
    1, 1, 1
);
INSERT INTO HISTORY (history_id, parameter_value_id, iteration_id) VALUES (
    2, 2, 1
);
INSERT INTO HISTORY (history_id, parameter_value_id, iteration_id) VALUES (
    3, 3, 2
);
INSERT INTO HISTORY (history_id, parameter_value_id, iteration_id) VALUES (
    4, 4, 2
);