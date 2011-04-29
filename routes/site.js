
/**
 * Module dependencies.
 */
var Post = require('../models/models').BlogPost;

module.exports = function(app){
    app.get('/', function(req, res){
		var page = req.query.page;
        Post.count({}, function(err, count){
            Post.find({}, function(err, posts){
				var posts = new Paginator(posts,2);
				posts.page(page);
                res.render('index', {
					'posts': posts
				});
            });
        });
    });
};
