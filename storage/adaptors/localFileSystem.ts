const fs = require('fs-extra');
import FileSystemInterface from '../interfaces/fileSystem';

class LocalFileSystem implements FileSystemInterface {
  writeFileSync(path: string, data: any): void {
    fs.writeFileSync(path, data);
  }

  readFileSync(path: string, encode: string): string {
    return fs.readFileSync(path, encode);
  }

  existsSync(path: string): boolean {
    return fs.existsSync(path);
  }
}

export default LocalFileSystem;
