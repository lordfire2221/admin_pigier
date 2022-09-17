import { Inject, Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class StorageBulletinService {
  bulletinDetailList!: AngularFireList<any>;
  fileList!: any[];
  dataSet: Data = {
    id:'',
    url:''
  };
  msg:string = 'error';
  constructor(@Inject(AngularFireDatabase) private firebase: AngularFireDatabase) { }
  getBulletinDetailList() {
    this.bulletinDetailList = this.firebase.list('bulletinDetails');
  }
  insertBulletinDetails(id:any,url:any) {
    this.dataSet = {
      id : id,
      url: url
    };
    this.bulletinDetailList.push(this.dataSet);
  }
  getBulletin(value:any){
    this.bulletinDetailList.snapshotChanges().subscribe(
      list => {
        this.fileList = list.map(item => { return item.payload.val();  });
        this.fileList.forEach(element => {
          if(element.id===value)
          this.msg = element.url;
        });
        if(this.msg==='error')
          alert('No record found');
        else{
          window.open(this.msg);
          this.msg = 'error';
        }
      }
    );
  }
}
export interface Data{
  id:string;
  url:string;
}
