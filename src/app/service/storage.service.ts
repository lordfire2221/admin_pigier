import { Injectable, Inject } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private basePath = '/uploads';

  constructor(private db: AngularFirestore,
     private storage: AngularFireStorage,
     private userservice:AuthService) { }

  pushFileToStorage(fileUpload: any,datas:any,type:string): Observable<number | undefined> {
    const filePath = `${type}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          var data = {
            ...datas,
            photo:downloadURL,
            name:fileUpload.file.name,
            restaurant:this.userservice.getUid()
          }
          this.saveFileData(data,type);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  updateToStorage(fileUpload: any,datas:any,type:string,id:any): Observable<number | undefined> {
    const filePath = `${type}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          var data = {
            ...datas,
            photo:downloadURL,
            name:fileUpload.file.name,
            restaurant:this.userservice.getUid()
          }
          this.updateFileData(data,type,id);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: any,type:string): void {
    this.db.collection(type).add(fileUpload);
  }
  private updateFileData(fileUpload: any,type:string,id:any): void {
    this.db.doc(`${type}/${id}`).update(fileUpload);
  }

  deleteFile(fileUpload: any,type:string): void {
        this.deleteFileStorage(fileUpload,type);
  }
  private deleteFileStorage(name: string,type:string): void {
    const storageRef = this.storage.ref(type);
    storageRef.child(name).delete();
  }
}