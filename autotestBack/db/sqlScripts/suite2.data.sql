-- SUITE
INSERT INTO Suite (suite_id, code, name, description) VALUES(
    2,
    'ST2',
    'Suite 2',
    'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
);


-- TEST
INSERT INTO Test (test_id, suite_id, code, num_order, name, description) VALUES(
    4, 2, 'T1', 1,
    'Test one', 
    'Description' 
);

INSERT INTO Test (test_id, suite_id, code, num_order, name, description) VALUES(
    5, 2, 'T2', 2, 
    'Test two', 
    'Description' 
);


-- PARAMETERNAME
-- Test 1
INSERT INTO ParameterName (parameter_name_id, data_type_id, test_id, label, html_name) VALUES(11, 1, 4, 'Login', 'login');
INSERT INTO ParameterName (parameter_name_id, data_type_id, test_id, label, html_name) VALUES(12, 4, 4, 'Password', 'password');

-- Test 2
INSERT INTO ParameterName (parameter_name_id, data_type_id, test_id, label, html_name) VALUES(13, 1, 5, 'first name', 'first-name');
INSERT INTO ParameterName (parameter_name_id, data_type_id, test_id, label, html_name) VALUES(14, 1, 5, 'last name', 'last-name');

-- PARAMETERVALUE
INSERT INTO ParameterValue (parameter_value_id, parameter_name_id, value) VALUES(3, 1, 'gilbert.davros@gmail.com');
INSERT INTO ParameterValue (parameter_value_id, parameter_name_id, value) VALUES(4, 2, 'gidav2019');
