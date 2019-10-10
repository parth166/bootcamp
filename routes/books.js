var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/search', function(req, res, next) {
  res.status(200).json({id: 1, name: "Harry Potter", author: "J.K. Rowling"});
});
router.get('/add', function(req, res, next) {
  res.render('add');
});
router.post('/add/:id/:name/:author', function(req, res, next) {
  const {id} = req.params.id;
  const {name} = req.params.name;
  const {author} = req.params.author;
  console.log(id,name,author);
});
router.post('/add', function (req, res, next) {
	console.info(req.body);
	res.status(200).json({ message:  "Book Saved Successfully" });
});
router.get('/find/:id', function (req, res, next) {
	const {id} = req.params
	console.info(id);
	res.status(200).json({ message:  "Book Found" });
});

module.exports = router;