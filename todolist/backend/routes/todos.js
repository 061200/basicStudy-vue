const express = require('express');
const router = express.Router();
const todoItems = require('../data.json');

router.get('/', function (req, res, next) {
  res.send(todoItems)
});

router.get('/:id', function (req, res, next) {
  const id = parseInt(req.params.id, 10)
  const todoItem = todoItems.filter(function (item) {
    return item.id === id
  });
  res.send(todoItem)
})

module.exports = router;
