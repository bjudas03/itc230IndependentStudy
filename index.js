console.log("hello world");

var fs = require('fs');
var http = require('http');
var movie_list = require('./my_lib/list_data');

function serveStatic(res, path, contentType, responseCode){
  if(!responseCode) responseCode = 200;
  console.log(__dirname + path)
  fs.readFile(__dirname + path, function(err, data){
      if(err){
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
      }
      else{
        res.writeHead(responseCode, {'Content-Type': contentType});
        res.end(data);
      }
  });
}

http.createServer(function(req, res) {
  console.log(req.url);
  console.log("Server is built");
  var path = req.url.toLowerCase();

  switch (path) {
    case '/':
      serveStatic(res, '/public/home.html', 'text/html'); 
      break;

    case '/about':
      console.log(path);
      console.log(__dirname + path);
      res.end("About page - to be built");
      break;

    default:
      console.log(path);
      console.log(__dirname + path);
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end("404 Page not found");

  //Testing module import
    console.log(movie_list.getAll());
    console.log(movie_list.getOne("Avalon"));
    console.log(movie_list.deleteOne("The Goonies"));
  }
}).listen(3000);