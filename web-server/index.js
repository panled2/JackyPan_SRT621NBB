const port = 8989,
http = require("http"),
httpStatus = require("http-status-codes"),
app = http.createServer((requeset, response) => {
    console.log("Received an incoming request!");
    response.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    response.end();
});

app.listen(port);
console.log (`The server is listening on port: ${port}`);