var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Save form information to database */
router.post('/myaction', function (req, res) {  
  router.use(bodyParser.json());
  const form = req.body;
  fs.appendFile('db.txt', JSON.stringify({ first_name: form.first_name, last_name: form.last_name }), (err) => {
      res.send('successfully registered. Database /db.txt')
  })
})

module.exports = router;
