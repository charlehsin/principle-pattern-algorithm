// Violation: The following codes are not easy to extend. If we want to use a different cloud service for our storage, then we need to modify our class codes.

class FileStorageService {
  constructor() {
    this.azureStorage = this.getAzureStorageConnection();
  }

  upload(file) {
    this.azureStorage.send(file);
  }

  getAzureStorageConnection() {
    // Codes to connect to Azure storage service.
    // The following is just dummy codes for example purpose.
    return {
      send(file) {
        console.log(`Use Azure to send ${file}.`);
      }
    }
  }
}

let myFileStorageService = new FileStorageService();
myFileStorageService.upload('file 1');
