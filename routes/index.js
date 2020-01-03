var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var arr = [{
    title: '标题一',
    content: '这里是内容'
  }, {
    title: '标题一',
    content: '这里是内容'
  }, {
    title: '标题一',
    content: '这里是内容'
  }, {
    title: '标题一',
    content: '这里是内容'
  }, {
    title: '标题一',
    content: '这里是内容'
  }]
  res.render('index', { list: arr, title: 'Express', say: '我这心<a href="">里卧槽</a>卧槽的' , answer: '<b>嗯嗯</b>'});
});

module.exports = router;
