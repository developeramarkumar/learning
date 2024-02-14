import { Readable, Writable } from "stream";

class Employee {
    private data: Record<string, Buffer> = {};
    storeInfo(data: string) {
        this.data['about'] = Buffer.from(data);
    }
    getInfo() {
        return this.data['about'].toString();
    }
}
const employee = new Employee();

employee.storeInfo(JSON.stringify({ hello: 'world' }))
console.log(employee.getInfo())


class ReadableStream extends Readable {
    private data: any[] = ['test', "test2"];
    private index = 0

    _read() {
        if (this.index < this.data.length) {
            this.push(this.data[this.index]);
            this.index++;
        } else {
            this.push(null);
        }
    }
}
class LogWritableStream extends Writable {
    private data: number[] = [];
    _write(chunk: any, encoding: any, callback: Function) {
        console.log(`Received chunk for write: ${chunk}`);
        callback();
    }
}
const readStream = new ReadableStream();
const writeStream = new LogWritableStream();



readStream.pipe(writeStream);


readStream.on('end', () => {
    console.log(`end stream`);
});
