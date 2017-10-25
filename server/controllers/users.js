const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send([
    {
      id: 1,
      name: 'User A',
      email: 'usera@user.com',
      password: 'usera',
    },
    {
      id: 2,
      name: 'User B',
      email: 'userb@user.com',
      password: 'userb',
    },
    {
      id: 3,
      name: 'User C',
      email: 'userc@user.com',
      password: 'userc',
    },
    {
      id: 4,
      name: 'User D',
      email: 'userd@user.com',
      password: 'userd',
    },
    {
      id: 5,
      name: 'User E',
      email: 'usere@user.com',
      password: 'usere',
    },
  ]);
});

module.exports = router;
