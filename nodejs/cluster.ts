const cluster = require('cluster');
const os = require('os');
const http = require('http');

const cpus = os.cpus();

if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);
    for (let i = 0; i < cpus.length; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker: any) => {
        console.log('existed process id : ' + worker.process.pid);
        cluster.fork();
    });
} else {
    const server = http.createServer((req: any, res: any) => {
        if (req.url == '/home') {
            res.writeHead(200);
            res.end('Hello from worker ' + cluster.worker.id);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page not found');
        }
    });

    server.listen(3000, () => {
        console.log(`Worker ${cluster.worker.id} is listening on port 3000`);
    });
}