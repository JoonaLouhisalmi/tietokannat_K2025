const express = require('express');
const router = express.Router();
const opiskelija = require('../models/opiskelija_model');

router.get('/', (req, res) => {
  opiskelija.getAll((err, result) => {
    err ? res.json(err) : res.json(result);
  });
});

router.get('/:id', (req, res) => {
  opiskelija.getOne(req.params.id, (err, result) => {
    err ? res.json(err) : res.json(result);
  });
});

router.post('/', (req, res) => {
  opiskelija.add(req.body, (err, result) => {
    err ? res.json(err) : res.json(result);
  });
});

router.put('/:id', (req, res) => {
  opiskelija.update(req.params.id, req.body, (err, result) => {
    err ? res.json(err) : res.json(result);
  });
});

router.delete('/:id', (req, res) => {
  opiskelija.delete(req.params.id, (err, result) => {
    err ? res.json(err) : res.json(result);
  });
});

module.exports = router;
