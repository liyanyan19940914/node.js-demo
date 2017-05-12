const http = require('http');

const hostnmae = "127.0.0.1";
const port = "3000";

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port,hostnmae,()=>{
    console.log(`服务器运行在http://${hostnmae}:${port}`);
})