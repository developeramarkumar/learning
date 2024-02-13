namespace DependencyInversion {
    type OrderIdType = number;
    type FileSystemInterface = {
        readFile(path: string): string,
        writeFile(path: string, data: string): string
    }
    interface StorageInterface {
        read(path: string): string
        write(path: string, data: string): string
    }

    class Storage implements StorageInterface {
        constructor(private fileSystem: FileSystemInterface) { }
        read(path: string): string {
            return this.fileSystem.readFile(path)
        }

        write(path: string, data: string): string {
            return this.fileSystem.writeFile(path, data)
        }
    }

    class LocalFileSystem implements FileSystemInterface {
        readFile(path: string): string {
            return 'localTestData'
        }

        writeFile(path: string, data: string): string {
            return 'local-stored-relative-file-path'
        }
    }

    class CloudFileSystem implements FileSystemInterface {
        readFile(path: string): string {
            return 'cloudTestData'
        }

        writeFile(path: string, data: string): string {
            return 'cloud-stored-relative-file-path'
        }
    }

    const localFileSystem = new LocalFileSystem();
    const cloudFileSystem = new CloudFileSystem();

    const localStorage = new Storage(localFileSystem);
    const cloudStorage = new Storage(cloudFileSystem);

    console.log(localStorage.read('test-path'));
    console.log(localStorage.write('test-path', 'data'));
    console.log(cloudStorage.read('test-path'));
    console.log(cloudStorage.write('test-path', 'data'));

}