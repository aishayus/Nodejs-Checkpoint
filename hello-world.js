console.log("HELLO WORLD")
var http = require("http");

http.createServer( (request,response) => {
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('<Hello Node!!!!\n');
}).listen(3000)

console.log('Server running at http://localhost:3000/')

var fs = require("fs")
var data = fs.readFileSync("welcome.txt")

fs.readFile("welcome.txt", (err,data)=>{
    err? console.log(err):console.log(data.toString())    
})
console.log("Program ran")

