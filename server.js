// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function (req, res) {
	res.render('pages/index', getMeta('Sample Ejs', 'Sample Project for testing', 'https://prerender.io/img/reactjs.png'))
});

// about page 
app.get('/about', function (req, res) {
	res.render('pages/about', getMeta("About US", "This is About Us Description", "http://dtits.net/ckeditor/images/uploads/about-us.png"));
});

// about page 
app.get('/contact', function (req, res) {
	res.render('pages/contact', getMeta("Contact US", "This is COntact Page", "http://www.coca-colaindia.com/content/dam/journey/in/en/private/faqs/contact-us2.jpg"));
});

function getMeta(title, desc, img) {
	return {
		title: title,
		desc: desc,
		img: img
	}
}

app.listen(8080);
console.log('8080 is the magic port');