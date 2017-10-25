const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send([
    {
      id: 1,
      user: {
        id: 1,
        name: 'User A',
      },
      products: [
        {
          id: 1,
          name: 'Product A',
          units: 10,
        },
        {
          id: 4,
          name: 'Product C',
          units: 3,
        },
      ],
      total: 200,
    },
    {
      id: 2,
      user: {
        id: 4,
        name: 'User D',
      },
      products: [
        {
          id: 3,
          name: 'Product C',
          units: 5,
        },
      ],
      total: 3,
    },
  ]);
});

module.exports = router;
