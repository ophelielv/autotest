-- SUITE
INSERT INTO Suite (suite_id, code, name, description) VALUES(
    2,
    'ST2',
    'Suite 2',
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
);

-- TEST
INSERT INTO Test (test_id, suite_id, code, rank, name, description) VALUES(
    4, 2, 'T1', 1
    'First test', 
    'Description', 
);

INSERT INTO Test (test_id, suite_id, code, rank, name, description) VALUES(
    5, 2, 'T2', 2
    'Second test', 
    'Description', 
);

INSERT INTO Iteration (iteration_id, suite_id, date, done, passed, result) VALUES (
    1, 2, datetime('now'), 0, 0, NULL
);

-- PARAMETERNAME
-- PARAMETERVALUE

-- ITERATION
-- none