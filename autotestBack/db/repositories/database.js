
const sqlite3 = require('sqlite3').verbose();
const { DATABASE_PATH } = require('../../constants/db.constants');

const database = new sqlite3.Database(DATABASE_PATH, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

// database.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });

module.exports = database;