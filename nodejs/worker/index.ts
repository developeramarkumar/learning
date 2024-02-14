namespace WorkerThread {
    const { Worker } = require('worker_threads');
    const worker = new Worker(__dirname + '/worker1.js');

    console.time('mainWorkerTime');
    console.time('workerThreadTime');
    worker.on('message', function (j: any) {
        console.log('worker thread count of loop is :' + j);
        console.timeEnd('workerThreadTime');
    });
    let j = 0
    for (let i = 0; i < 9999; i++) {
        j++

    }
    console.log('main worker count  of loop is :' + j)
    console.timeEnd('mainWorkerTime');




}