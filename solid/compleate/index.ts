import LocalFileSystem from './storage/adaptors/localFileSystem';
import MemoryFileSystem from './storage/adaptors/memoryFileSystem';
import FileStorage from './storage/fileSystem';
import ReadOnlyFileSystem from './storage/readOnlyFileSystem'
const localFileSystem = new LocalFileSystem();
const memoryFileSystem = new MemoryFileSystem();

// Using FileStorage with LocalFileSystem
const localFileStorage = new FileStorage(localFileSystem);
const storedLocalPath = localFileStorage.saveData('local_example.json', { key: 'value' });
const localFileData = localFileStorage.readData(storedLocalPath);
console.log('Local File Data:', localFileData);

// Using FileStorage with MemoryFileSystem
const memoryFileStorage = new FileStorage(memoryFileSystem);
const storedMemoryPath = memoryFileStorage.saveData('memory_example.json', { key: 'value' });
const memoryFileData = memoryFileStorage.readData(storedMemoryPath);
console.log('Memory File Data:', memoryFileData);

// for encypted file is  
const readOnlyLocalFileStorage = new ReadOnlyFileSystem(localFileSystem);
const readOnlyMemoryFileStorage = new ReadOnlyFileSystem(memoryFileSystem);
readOnlyLocalFileStorage.writeFileSync('local_example.json', { key: 'value' });
readOnlyMemoryFileStorage.writeFileSync('local_example.json', { key: 'value' });
const readOnlyLocalFileData = readOnlyLocalFileStorage.readFileSync('data/local_example.json','utf-8');
const readOnlyMemoryFileData = readOnlyMemoryFileStorage.readFileSync('data/local_example.json','utf-8');

console.log('Read Only Local File Data:', readOnlyLocalFileData);
console.log('Read Only Memory File Data:', readOnlyMemoryFileData);

