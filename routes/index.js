var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/help', function(req, res, next) {
  res.render('help', { title: 'Help' });
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'FAQ' });
});

module.exports = router;
