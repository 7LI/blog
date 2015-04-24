var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');
 
// New blog
router.get('/blogs/new', function(req, res) {
  res.render('blog/new', {
    title: 'New blog', 
    script: 'blog'
  });
});

// Create blog
router.post('/blogs/create', function(req, res) {
  new Blog({
    title: req.body.title,
    content: req.body.content,
    update_at: Date.now()
  }).save(function(err, blog) {
    if (err) {
      console.log(err);
    } else {
      res.json(blog);
    }
  })
})

// Show blogs
router.get('/blogs', function(req, res) {
  Blog.find(function(err, blogs, count) {
    res.render('blog/list', {
      title: 'Blog list',
      blogs: blogs,
      style: 'blog',
      script: 'blog'
    })
  })
})

// Show blog
router.get('/blogs/:id', function(req, res) {
  Blog.findOne({_id: req.params.id},function(err, blog, count) {
    // res.json(blog);
    res.render('blog/show', {
      title: blog.title,
      blog: blog,
      style: 'blog',
      script: 'blog'
    })
  })
})
module.exports = router;

