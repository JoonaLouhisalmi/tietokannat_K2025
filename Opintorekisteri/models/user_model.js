const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds = 10;

const user = {

  getAll: function(callback) {
    return db.query("SELECT * FROM user", callback);
  },

  getOne: function(uname, callback) {
    return db.query(
      "SELECT * FROM user WHERE username=?", 
      [uname], 
      callback
    );
  },

  add: function(userData, callback) {
    bcrypt.hash(userData.password, saltRounds, function(err, hash) {
      if (err) return callback(err);

      return db.query(
        "INSERT INTO user (username, fname, password) VALUES (?, ?, ?)",
        [userData.username, userData.fname, hash],
        callback
      );
    });
  },

  delete: function(uname, callback) {
    return db.query(
      "DELETE FROM user WHERE username=?",
      [uname],
      callback
    );
  },

  update: function(uname, userData, callback) {
    bcrypt.hash(userData.password, saltRounds, function(err, hash) {
      if (err) return callback(err);

      return db.query(
        "UPDATE user SET username=?, fname=?, password=? WHERE username=?",
        [userData.username, userData.fname, hash, uname],
        callback
      );
    });
  }
};

module.exports = user;
