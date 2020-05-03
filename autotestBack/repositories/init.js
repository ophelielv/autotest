const sqlite3 = require('sqlite3').verbose();
const md5 = require('md5');
const CREATESTMT = require('./initializeDatabase.script');

const { DATABASE_PATH } = require('../constants/db.constants');

const db = new sqlite3.Database(
  DATABASE_PATH,
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    } else {
      console.log('Connected to the SQLite database.');
      CREATESTMT.map(stmt => {
        db.run(stmt,
          (err) => {
            if (err) {
              // Table already created
            } else {
              // Table just created, creating some rows
              var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
              db.run(insert, ["admin", "admin@example.com", md5("admin123456")])
              db.run(insert, ["user", "user@example.com", md5("user123456")])
            }
          });

      })
    }
  });


module.exports = db