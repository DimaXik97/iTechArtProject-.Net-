var http = require('http');
var static = require('node-static');
var express = require('express');
var file = new static.Server('static');

const app = express();

 
app.use(express.static('static'));

const apiController = require('./moch/controllers/api')();

app.use('/api', apiController);
app.get('*',(req, res) => {
  return res.send(f());
});

function f() {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>React</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" type="text/css" href="/css/style.css">
    </head>
    <body >
        <div id="app">
            <img src="/img/preload.gif">
        </div>
        <script src="/js/bundle.js"></script>
    </body>
    
  `;
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
