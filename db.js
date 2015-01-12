var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Blog = new Schema({
	title: String,
	content: String,
	update_at: Date
});
mongoose.model('Blog', Blog);
mongoose.connect('mongodb://localhost:27017')


