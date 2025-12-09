const db = require('../database');

const arviointi = {
  getAll: function (callback) {
    return db.query('SELECT * FROM arviointi', callback);
  },

  getOne: function (id, callback) {
    return db.query('SELECT * FROM arviointi WHERE idArviointi=?', [id], callback);
  },

  add: function (grade, callback) {
    return db.query(
      'INSERT INTO arviointi (idOpintojakso, idOpiskelija, Päivämäärä, Arvosana) VALUES (?, ?, ?, ?)',
      [grade.idOpintojakso, grade.idOpiskelija, grade.Päivämäärä, grade.Arvosana],
      callback
    );
  },

  delete: function (id, callback) {
    return db.query('DELETE FROM arviointi WHERE idArviointi=?', [id], callback);
  },

  update: function (id, grade, callback) {
    return db.query(
      'UPDATE arviointi SET idOpintojakso=?, idOpiskelija=?, Päivämäärä=?, Arvosana=? WHERE idArviointi=?',
      [grade.idOpintojakso, grade.idOpiskelija, grade.Päivämäärä, grade.Arvosana, id],
      callback
    );
  }
};

module.exports = arviointi;
