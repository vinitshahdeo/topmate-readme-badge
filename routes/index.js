const express = require('express'),
  router = express.Router(),
  topmate = require('../services/topmate');

router.get('/:id', function (req, res, next) {
  const username = req.params.id,
    style = req.query.style;

  topmate
    .generateBadge(username, style)
    .then((badge) => {
      res.setHeader('content-type', 'image/svg+xml;charset=utf-8');
      res.send(badge);
    })
    .catch(console.log);
});

// defaults to badge for https://topmate.io/vinitshahdeo
router.get('/', function (req, res, next) {
  topmate
    .generateBadge()
    .then((badge) => {
      res.setHeader('content-type', 'image/svg+xml;charset=utf-8');
      res.send(badge);
    })
    .catch(console.log);
});

module.exports = router;
