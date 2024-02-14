const cluster = require('cluster');
const os = require('os');
const http = require('http');

const cpus = os.cpus();

function test(pid: any) {
    console.log('child process started for pid :' + pid)
}


if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);
    for (let i = 0; i < cpus.length; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker: any) => {
        console.log(worker.process.pid);
        cluster.fork();
    });
} else {
    test(process.pid)
}