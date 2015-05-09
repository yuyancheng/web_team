var http = require("http");

http.Server(function(req, res){
	res.write("hello boy.");
	res.end();
}).listen(8090);
