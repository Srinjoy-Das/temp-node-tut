const http = require('http');

const server = http.createServer((request, responce) => {
    if(request.url === '/'){
        return responce.end('Welcome to Home Page')
    }
    if(request.url === '/about'){
        return responce.end('Little History about the site')
    }
    responce.end(`
        <h1>Oops!</h1>
        <p>Page Doesn't exits</p>
        <a href="/">Back Home</a>
        `)
})

server.listen(5000);