-- /!\ FOR TEST ONLY /!\
-- EMPTY TABLES AND RESET AUTO-INCREMENT
DELETE FROM ParameterValue;
DELETE FROM ParameterName;
DELETE FROM History;
DELETE FROM Iteration;

DELETE FROM sqlite_sequence WHERE name='ParameterValue';
DELETE FROM sqlite_sequence WHERE name='ParameterName';
DELETE FROM sqlite_sequence WHERE name='History';
DELETE FROM sqlite_sequence WHERE name='Iteration';