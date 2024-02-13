interface FileSystem {
  writeFileSync(path: string, data: any): void;
  readFileSync(path: string, encoding: string): string;
  existsSync(path: string): boolean;
}
export default FileSystem