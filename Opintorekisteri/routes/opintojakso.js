const express = require('express');
const router = express.Router();
const opintojakso = require('../models/opintojakso_model');

router.get('/', (req, res) => {
  opintojakso.getAll((err, result) => {
    err ? res.json(err) : res.json(result);
  });
});

router.get('/:id', (req, res) => {
  opintojakso.getOne(req.params.id, (err, result) => {
    err ? res.json(err) : res.json(result);
  });
});

router.post('/', (req, res) => {
  opintojakso.add(req.body, (err, result) => {
    err ? res.json(err) : res.json(result);
  });
});

router.put('/:id', (req, res) => {
  opintojakso.update(req.params.id, req.body, (err, result) => {
    err ? res.json(err) : res.json(result);
  });
});

router.delete('/:id', (req, res) => {
  opintojakso.delete(req.params.id, (err, result) => {
    err ? res.json(err) : res.json(result);
  });
});

module.exports = router;
