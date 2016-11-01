var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var config = {
    user: 'hub-kelvin',
    database: 'hub-kelvin',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD 
};
var app = express();
app.use(morgan('combined'));
app.get('/submit', function (req, res) {
  res.send(req.query.Search);
});
var pool = new Pool(config);
app.get('/test-db',function(req,res){
    pool.query('SELECT *FROM ARTICLE',function(err,result){
        if (err) {
            res.status(500).send(err.toString());
        }
        else {
            res.send(JSON.stringify(result.rows));
        }
    });
});
app.get('/submit', function (req, res) {
  res.send(req.query.Query);
});


            
           
function createTemp(data) {
    var temp=`<!doctype HTML>
<html>
    <head>
    <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet">    
    <link href="/ui/style.css" rel="stylesheet">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${data.title}</title> 
</head>

<body>

<ul>
<li><a href="">port 80</a></li>
<li><a href="">Home</a></li>
<li><a href="">Contact</a></li>
<li><a href="">About</a></li>
</ul>


<h1>${data.heading}</h1>

<img src='${data.link}'>
<h4>${data.date}</h4>
<p>
${data.content}
</p>

</body>
${data.foot}    
</html>`;
    return temp;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'port80index.html'));
});
app.get('/images/HP-lapotop-Charger.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'HP-lapotop-Charger.jpg'));
});


app.get('/images/apple-macbook-pro-touchbar.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'apple-macbook-pro-touchbar.jpg'));
});
app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});
app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
});
app.get('/ui/stylesheet.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'stylesheet.css'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/bitstory.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bitstory.png'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/posts/:articleName', function (req, res) {
  // SELECT * FROM article WHERE title = '\'; DELETE WHERE a = \'asdf'
  pool.query("SELECT * FROM posts WHERE title = $1", [req.params.articleName], function (err, result) {
    if (err) {
        res.status(500).send(err.toString());
    } else {
        if (result.rows.length === 0) {
            res.status(404).send('404 Post not found');
        } else {
            var articleData = result.rows[0];
            res.send(createTemp(articleData));
        }
    }
  });
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
