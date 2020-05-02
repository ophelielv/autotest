
const sqlite3 = require('sqlite3').verbose();
const { DATABASE_PATH } = require('../constants/db.constants');

const db = new sqlite3.Database(DATABASE_PATH, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

let sql = `SELECT *
            FROM Suite
            WHERE name = ?`;

db.each(sql, ['ST1'], (err, row) => {
  if (err) {
    throw err;
  }
  console.log(`${row.suite_id} ${row.code} ${row.name}`);
});

// const stmt = db.prepare(`INSERT INTO lorem VALUES (?)`);

// for (let i = 0; i < 10; i++) {
//   stmt.run(`Ipsum ` + i);
// }

// stmt.finalize();

// db.each(`SELECT rowid AS id, info FROM lorem`, function (err, row) {
//   console.log(err, row.id + ': ' + row.info);
// });

// db.serialize(() => {
//   db.each(`SELECT PlaylistId as id,
//                 Name as name
//          FROM playlists`, (err, row) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log(row.id + "\t" + row.name);
//   });
// });

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});

module.export = db;