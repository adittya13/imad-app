var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
        
        articleOne :   {
            title : 'Article One | Adittya Srikanth',
            heading: 'Article One',
            date: 'August 7 2017',
            content:` 
                        <p>
                            This is the content of the first article.
                            This is just to see if it works.
                            This is the content of the first article.
                            This is just to see if it works.
                            This is the content of the first article.
                            This is just to see if it works.
                        </p>
                        
                        <p>
                            This is the content of the first article.
                            This is just to see if it works.
                            This is the content of the first article.
                            This is just to see if it works.
                            This is the content of the first article.
                            This is just to see if it works.
                        </p>
                        
                        <p>
                            This is the content of the first article.
                            This is just to see if it works.
                            This is the content of the first article.
                            This is just to see if it works.
                            This is the content of the first article.
                            This is just to see if it works.
                        </p>`
                        },
        articleTwo :   {
            title: 'Article Two | Adittya Srikanth',
            heading: 'Article Two',
            date: 'August 7 2017',
            content:` 
                        <p>
                            This is the content of the Second article.
                            This is just to see if it works.
                            This is the content of the Second article.
                            This is just to see if it works.
                            This is the content of the Second article.
                            This is just to see if it works.
                        </p>
                        
                        <p>
                            This is the content of the Second article.
                            This is just to see if it works.
                            This is the content of the Second article.
                            This is just to see if it works.
                            This is the content of the Second article.
                            This is just to see if it works.
                        </p>
                        
                        <p>
                            This is the content of the Second article.
                            This is just to see if it works.
                            This is the content of the Second article.
                            This is just to see if it works.
                            This is the content of the Second article.
                            This is just to see if it works.
                        </p>`}, 
        articleThree : {
            title: 'Article Three | Adittya Srikanth',
            heading: 'Article Three',
            date: 'August 7 2017',
            content:` 
                       <p>
                            This is the content of the Third article.
                            This is just to see if it works.
                            This is the content of the Third article.
                            This is just to see if it works.
                            This is the content of the Third article.
                            This is just to see if it works.
                        </p>
                        
                        <p>
                            This is the content of the Third article.
                            This is just to see if it works.
                            This is the content of the Third article.
                            This is just to see if it works.
                            This is the content of the Third article.
                            This is just to see if it works.
                        </p>
                        
                        <p>
                            This is the content of the Third article.
                            This is just to see if it works.
                            This is the content of the Third article.
                            This is just to see if it works.
                            This is the content of the Third article.
                            This is just to see if it works.
                        </p>`
                        }
};   

    function createtemplate(data)
    {
        var title=data.title;
        var content=data.content;
        var date=data.date;
        var heading=data.heading;
        var htmltemplate = 
            `<html>
                <head>
                
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, inital-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
                </head>
                
                <body>
                    
                    <div class="container">
                    
                        <div>
                            <a href="/">Home</a>
                        </div>
                        <hr/>
                        <h3>
                            ${heading}
                        </h3>
                
                        <div>
                        ${date}
                        </div>
                
                        <div>
                           ${content}
                        </div>
                    </div>
                </body>
                
            </html>`;
        return htmltemplate;
    }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/article-one',function(req,res) {
   res.send(createtemplate(articleOne));
});

app.get('/ui/article-two',function(req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html')); 
});

app.get('/ui/article-three',function(req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));  
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
