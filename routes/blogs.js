var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');
 
// New blog
router.get('/blog/new', function(req, res) {
	res.render('blog/new', {title: 'New blog', script: 'blog'});
});

// Create blog
router.post('/blog/create', function(req, res) {
	new Blog({
 		title: req.body.title,
 		content: req.body.content,
 		update_at: Date.now()
 	}).save(function(err, blog, count) {
 		if (error) {
 			console.log(error);
 		}else{
 			res.json(blog);
 		}
 	})
})

// Show blogs
router.get('/blogs', function(req, res) {
	Blog.find(function(err, blogs, count) {
		res.render('show', {blogs: blogs})
	})
})
module.exports = router;

