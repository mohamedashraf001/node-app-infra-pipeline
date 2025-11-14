const router = require('express').Router();

// sample route: /api/time
router.get('/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

module.exports = router;
