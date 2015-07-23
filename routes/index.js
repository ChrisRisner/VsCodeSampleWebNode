var express = require('express');
var router = express.Router();
var appInsights = require('applicationinsights');

/* GET home page. */
router.get('/', function(req, res, next) {
  appInsights.client.trackRequest(req, res);
  appInsights.client.trackEvent("page request");
  res.render('index', { title: 'Express' });
});

router.get('/disney', function(req, res, next) {
  appInsights.client.trackRequest(req, res);
  appInsights.client.trackEvent("page request");
  res.render('disney', { title: 'Disney' });
});

module.exports = router;
