
interface FileStorage {
  saveData(fileName: string, data: any): void;
  readData(fileName: string): any | null;
}

export default FileStorage