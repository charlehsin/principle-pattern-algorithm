// We pass the target service connection as the argument to FileStorageService class constructor.
// Other child classes can extend FileStorageService to connect to other cloud services.

class FileStorageService {
  constructor(storageServiceConnection = () => {
    // Codes to connect to default storage service.
    // The following is just dummy codes for example purpose.
    return {
      send(file) {
        console.log(`Use default service to send ${file}.`);
      }
    }
  }) {
    this.storageConnection = storageServiceConnection;
  }

  upload(file) {
    this.storageConnection().send(file);
  }
}

class AzureFileStorageService extends FileStorageService {
  constructor() {
    super(() => {
      // Codes to connect to Azure storage service.
      // The following is just dummy codes for example purpose.
      return {
        send(file) {
          console.log(`Use Azure to send ${file}.`);
        }
      }
    });
  }
}

class AwsFileStorageService extends FileStorageService {
  constructor() {
    super(() => {
      // Codes to connect to Aws storage service.
      // The following is just dummy codes for example purpose.
      return {
        send(file) {
          console.log(`Use AWS to send ${file}.`);
        }
      }
    });
  }
}

let myFileStorageService = new FileStorageService();
myFileStorageService.upload('file 1');
let myAzureFileStorageService = new AzureFileStorageService();
myAzureFileStorageService.upload('file 1');
let myAwsFileStorageService = new AwsFileStorageService();
myAwsFileStorageService.upload('file 1');
