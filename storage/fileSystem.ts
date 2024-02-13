import FileStorageInterface from './interfaces/fileStorage';
import FileSystemInterface from './interfaces/fileSystem';
const path = require('path');
class FileSystem implements FileStorageInterface {
  private fileSystem: FileSystemInterface;

  constructor(fileSystem: FileSystemInterface) {
    this.fileSystem = fileSystem;
  }

  saveData(fileName: string, data: any): string {
    const fullPath = path.join(process.cwd(), 'data', fileName);

    const serializedData = JSON.stringify(data);

    this.fileSystem.writeFileSync(fullPath, serializedData);
    return path.join('data', fileName);
  }

  readData(filepath: string): any | null {
    const fullPath = path.join(process.cwd(), filepath);
    if (this.fileSystem.existsSync(fullPath)) {
      const rawData = this.fileSystem.readFileSync(fullPath, 'utf-8');
      const parsedData = JSON.parse(rawData);
      console.log(`Data read from ${fullPath}`);
      return parsedData;
    } else {
      console.log(`File not found: ${fullPath}`);
      return null;
    }
  }
}

export default FileSystem
