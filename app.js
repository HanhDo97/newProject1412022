import { createServer } from 'http';

let server = createServer(function(req, res){
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hey You In');
});

server.listen(3000, function(error){
    if(error){console.log('Something went wrong', error)}
    else {console.log('Server is running through port 3000');}
});

