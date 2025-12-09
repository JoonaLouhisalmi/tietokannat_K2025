const express = require('express');
const router = express.Router();
const arviointi = require('../models/arviointi_model');

router.get('/', (req, res) => {
  arviointi.getAll((err, result) => {
    err ? res.json(err) : res.json(result);
  });
});

router.get('/:id', (req, res) => {
  arviointi.getOne(req.params.id, (err, result) => {
    err ? res.json(err) : res.json(result);
  });
});

router.post('/', (req, res) => {
  arviointi.add(req.body, (err, result) => {
    err ? res.json(err) : res.json(result);
  });
});

router.put('/:id', (req, res) => {
  arviointi.update(req.params.id, req.body, (err, result) => {
    err ? res.json(err) : res.json(result);
  });
});

router.delete('/:id', (req, res) => {
  arviointi.delete(req.params.id, (err, result) => {
    err ? res.json(err) : res.json(result);
  });
});

module.exports = router;
