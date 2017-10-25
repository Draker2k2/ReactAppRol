const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send([
    {
      id: 1,
      name: 'Product A',
      price: 10,
      stock: 10,
      category: 'A',
    },
    {
      id: 2,
      name: 'Product B',
      price: 3,
      stock: 15,
      category: 'A',
    },
    {
      id: 3,
      name: 'Product C',
      price: 1,
      stock: 50,
      category: 'B',
    },
    {
      id: 4,
      name: 'Product D',
      price: 25,
      stock: 0,
      category: 'C',
    },
    {
      id: 5,
      name: 'Product E',
      price: 23,
      stock: 2,
      category: 'A',
    },
    {
      id: 6,
      name: 'Product F',
      price: 23,
      stock: 2,
      category: 'D',
    },
  ]);
});

module.exports = router;
