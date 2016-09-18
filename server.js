var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var container={
    
    'article-one' :
    {
        'title' :'Article-One',
        'heading' :'Now you see your Article-One'
    
    },
'article-two' :
    {
        'title' :'Article-Two',
        'heading' :'Now you see your Article-Two'
    }
    
    
            };
function createTemp(data) {
    var temp=`<html>
    <head>
    <title>${data.title}</title>
    </head>
    <body>
        <div>
            <a href="/">Home</a>
            <a href="/article-two">Article-Two</a>
            
        </div>
    <h1>${data.heading}</h1>
    </body>
    </html>`;
    return temp;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/bg.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bg.jpg'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:article', function (req, res) {
  res.send(createTemp(container[req.params.article]));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
