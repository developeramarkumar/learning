import FileSystem from './interfaces/fileSystem';
class ReadOnlyFileSystem implements FileSystem {
  constructor(private fileSystem: FileSystem) {}

  writeFileSync(path: string, data: any): void {
    console.log(`Write operation not allowed on ReadOnlyFileSystem.`);
  }

  readFileSync(path: string, encoding: string): string {
    return this.fileSystem.readFileSync(path, encoding);
  }

  existsSync(path: string): boolean {
    return this.fileSystem.existsSync(path);
  }
}

export default ReadOnlyFileSystem