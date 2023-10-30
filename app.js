// IMPORT PACKAGES
const express = require('express');
const morgan = require('morgan');
// CREATE EXPRESS APP
const app = express();
// MIDDLEWARE

app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));

// ROUTES
// Start defining your routes here:
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/views/blog.html');
});

const projects = require(__dirname + '/data/projects');

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

const articles = require(__dirname + '/data/articles');

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

app.get('*', (req, res, next) => {
  res.status(404).sendFile(__dirname + '/views/not-found.html');
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => console.log('server running on http://localhost:5005'));
