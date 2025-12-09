const db = require('../database');

const opiskelija = {
  getAll: function (callback) {
    return db.query('SELECT * FROM opiskelija', callback);
  },

  getOne: function (id, callback) {
    return db.query('SELECT * FROM opiskelija WHERE idOpiskelija=?', [id], callback);
  },

  add: function (student, callback) {
    return db.query(
      'INSERT INTO opiskelija (Etunimi, Sukunimi, Osoite, Luokkatunnus) VALUES (?, ?, ?, ?)',
      [student.Etunimi, student.Sukunimi, student.Osoite, student.Luokkatunnus],
      callback
    );
  },

  delete: function (id, callback) {
    return db.query('DELETE FROM opiskelija WHERE idOpiskelija=?', [id], callback);
  },

  update: function (id, student, callback) {
    return db.query(
      'UPDATE opiskelija SET Etunimi=?, Sukunimi=?, Osoite=?, Luokkatunnus=? WHERE idOpiskelija=?',
      [student.Etunimi, student.Sukunimi, student.Osoite, student.Luokkatunnus, id],
      callback
    );
  }
};

module.exports = opiskelija;
