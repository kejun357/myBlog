var express = require('express');
var router = express.Router();
const { getList } = require('../controller/blog')


/* GET home page. */
router.get('/', function(req, res, next) {
  var arr = getList()
  console.log(arr)
  res.render('index', { list: arr });
});

module.exports = router;
