import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { ApiService } from '../service/api.service';
import { FirebaseService } from '../service/firebase.service';
import { StorageProgrammeService } from '../service/storage-programme.service';

@Component({
  selector: 'app-register-programme',
  templateUrl: './register-programme.component.html',
  styleUrls: ['./register-programme.component.css']
})
export class RegisterProgrammeComponent implements OnInit {
  public registerForm!:FormGroup;
  public id!:number;
  public uploadedFiles!:Array<File>;
  nomPhoto!: string;
  selectedProgramme: any = null;
  url!:string;
  file!:string;
  constructor(private fb:FormBuilder,
    private router:Router,
    private _api:ApiService,
    private route:ActivatedRoute,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public firebaseService:FirebaseService,
    private storage: AngularFireStorage, 
    private fileService: StorageProgrammeService) { 
      this.registerForm = fb.group({
        Filiere:'',
        date:['',[Validators.required,Validators.maxLength(50)]],
        niveau:['',[Validators.required,Validators.minLength(0)]]
    })
  }
  showPreview(event: any) {
    this.selectedProgramme = event.target.files[0];
  }


  async onSubmit() {
    const formValue = this.registerForm.value;
    this.firebaseService.createProgramme(this.registerForm.value)
    this.save()
    this.router.navigate(['etude']);

  }
  ngOnInit(){
    this.fileService.getProgrammeDetailList();
  }
  save(){
    var name = this.selectedProgramme.name;
    const fileRef = this.storage.ref(name);
    this.storage.upload(name, this.selectedProgramme).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
          this.fileService.insertProgrammeDetails(`programme_etudiant_${Date.now()}`,this.url);
          alert('Upload Successful');
        })
      })
    ).subscribe();
  }
}
