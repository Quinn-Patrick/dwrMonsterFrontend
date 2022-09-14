import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { BlobClient, ContainerClient } from '@azure/storage-blob'

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor() { }

  downloadBlobToFile(containerClient: ContainerClient, blobName: string, fileNameWithPath: string): Observable<string>{
    return new Observable((observer)=> {
      const blobClient: BlobClient = containerClient.getBlobClient(blobName);
      blobClient.downloadToFile(fileNameWithPath);
      console.log(`Download of ${blobName} successful.`);
      observer.next(fileNameWithPath);
    });
  }
}
