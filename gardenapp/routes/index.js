var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CES-26' });
});

/* GET task1 page. */
router.get('/task1', function(req, res, next) {
  res.render('task1.jade', { title: 'Tarefa 1' });
});

/* GET task2 page. */
router.get('/task2', function(req, res, next) {
  res.render('task2.jade', { title: 'Tarefa 2' });
});

/* GET task3 page. */
router.get('/task3', function(req, res, next) {
  res.render('task3.jade', { title: 'Tarefa 3' });
});

/* GET task4 page. */
router.get('/task4', function(req, res, next) {
  res.render('task4.jade', { title: 'Tarefa 4' });
});

/* GET task5 page. */
router.get('/task5', function(req, res, next) {
  res.render('task5.jade', { title: 'Tarefa 5' });
});

/* GET task6 page. */
router.get('/task6', function(req, res, next) {
  res.render('task6.jade', { title: 'Tarefa 6' });
});

/* GET task7 page. */
router.get('/task7', function(req, res, next) {
  res.render('task7.jade', { title: 'Tarefa 7' });
});

/* GET task8 page. */
router.get('/task8', function(req, res, next) {
  res.render('task8.jade', { title: 'Tarefa 8' });
});

/* Save form information to database */
router.post('/myaction', function (req, res) {  
  router.use(bodyParser.json());
  const form = req.body;
  fs.appendFile('public/db.txt', JSON.stringify({ first_name: form.first_name, last_name: form.last_name }), (err) => {
      res.send('successfully registered. Database /db.txt')
  })
})

module.exports = router;
