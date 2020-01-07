var express = require('express');
var router = express.Router();
const { getList,detail } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')


/* GET home page. */
router.get('/', function(req, res, next) {
  var result = getList()
  res.render('index', { list: result });
});

router.get('/detail', function(req, res, next) {
  var result = detail()
  if(result){
    res.json({
      errno:0,
      data:result
    })
  }
});

module.exports = router;
