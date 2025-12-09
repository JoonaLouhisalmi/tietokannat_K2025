const db = require('../database');

const opintojakso = {
  getAll: function (callback) {
    return db.query('SELECT * FROM opintojakso', callback);
  },

  getOne: function (id, callback) {
    return db.query('SELECT * FROM opintojakso WHERE idOpintojakso=?', [id], callback);
  },

  add: function (course, callback) {
    return db.query(
      'INSERT INTO opintojakso (Nimi, Laajuus, Tunnus) VALUES (?, ?, ?)',
      [course.Nimi, course.Laajuus, course.Tunnus],
      callback
    );
  },

  delete: function (id, callback) {
    return db.query('DELETE FROM opintojakso WHERE idOpintojakso=?', [id], callback);
  },

  update: function (id, course, callback) {
    return db.query(
      'UPDATE opintojakso SET Nimi=?, Laajuus=?, Tunnus=? WHERE idOpintojakso=?',
      [course.Nimi, course.Laajuus, course.Tunnus, id],
      callback
    );
  }
};

module.exports = opintojakso;
