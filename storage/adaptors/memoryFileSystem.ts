import FileSystemInterface from '../interfaces/fileSystem'
class MemoryFileSystem implements FileSystemInterface {
  private files: Record<string, string> = {};

  writeFileSync(path: string, data: any): void {
    this.files[path] = JSON.stringify(data);
  }

  readFileSync(path: string, encoding: string): string {
    return this.files[path] || '';
  }

  existsSync(path: string): boolean {
    return path in this.files;
  }
}
export default MemoryFileSystem