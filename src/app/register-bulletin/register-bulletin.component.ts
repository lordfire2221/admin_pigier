import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { ApiService } from '../service/api.service';
import { FirebaseService } from '../service/firebase.service';
import { StorageBulletinService } from '../service/storage-bulletin.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-register-bulletin',
  templateUrl: './register-bulletin.component.html',
  styleUrls: ['./register-bulletin.component.css']
})
export class RegisterBulletinComponent implements OnInit {
  public registerForm!:FormGroup;
  public id!:number;
  public uploadedFiles!:Array<File>;
  nomPhoto!: string;
  selectedBulletin: any = null;
  url!:string;
  file!:string;

  constructor( private fb:FormBuilder,
    private router:Router,
    private _api:ApiService,
    private route:ActivatedRoute,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public firebaseService:FirebaseService,
    private storage: AngularFireStorage, 
    private fileService: StorageBulletinService) {
      this.registerForm = fb.group({
        nom:['',[Validators.required,Validators.minLength(1)]],
        prenom:['',[Validators.required,Validators.minLength(1)]],
        Filiere:'',
        niveau:['',[Validators.required,Validators.minLength(1)]],
        semestre:'',
        type:'',
      })
     }
     showPreview(event: any) {
      this.selectedBulletin = event.target.files[0];
    }
  
  
    async onSubmit() {
      const formValue = this.registerForm.value;
      this.firebaseService.createBulletin(this.registerForm.value)
      this.save()
      this.router.navigate(['etude']);

    }
    ngOnInit(){
      this.fileService.getBulletinDetailList();
    }
    save(){
      var name = this.selectedBulletin.name;
      const fileRef = this.storage.ref(name);
      this.storage.upload(name, this.selectedBulletin).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.url = url;
            this.fileService.insertBulletinDetails(`bulletin_etudiant_${Date.now()}`,this.url);
            alert('Upload Successful');
          })
        })
      ).subscribe();
    }
}
