const http = require("http");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("Ха-Ха-Ха! Node приложение запустилось!");
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});