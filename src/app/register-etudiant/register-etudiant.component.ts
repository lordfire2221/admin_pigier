import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import {AngularFirestore,AngularFirestoreDocument,} from '@angular/fire/compat/firestore';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseService } from '../service/firebase.service';
import { StorageService } from '../service/storage.service';
import { finalize } from "rxjs/operators";


@Component({
  selector: 'app-register-etudiant',
  templateUrl: './register-etudiant.component.html',
  styleUrls: ['./register-etudiant.component.css']
})
export class RegisterEtudiantComponent implements OnInit {
  public registerForm!:FormGroup;
  public id!:number;
  public uploadedFiles!:Array<File>;
  nomPhoto!: string;
  selectedImage: any = null;
  url!:string;
  file!:string;
public password !:string;

  constructor(  private fb:FormBuilder,
    private router:Router,
    private _api:ApiService,
    private route:ActivatedRoute,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public firebaseService:FirebaseService,
    private storage: AngularFireStorage, private fileService: StorageService) {
     this.registerForm = fb.group({
      nom_etudiant:['',[Validators.required,Validators.minLength(2)]],
      prenom_etudiant:['',[Validators.required,Validators.minLength(2)]],
      num_etudiant:['',[Validators.required,Validators.maxLength(15)]],
      email:['',[Validators.required,Validators.email]],
      date_naissance:'',
      date_inscription:'',
      Filiere:'',
      an_uinver:['',[Validators.required,Validators.maxLength(12)]],
      niv_universitaire:'',
      role:'etudiant'
     })
   }
  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
  }


  async onSubmit() {
    const formValue = this.registerForm.value;
    this.password =formValue.nom_etudiant+formValue.prenom_etudiant+formValue.Filiere+formValue.niv_universitaire
    try {
      const result = await this.afAuth
        .createUserWithEmailAndPassword(formValue.email, this.password)
        if(result){
          this.firebaseService.createEtudiant(this.registerForm.value);
          this.save()
          this.router.navigate(['administration']);
        };
    } catch (error:any) {
      window.alert(error.message);
    }
  }
  ngOnInit(){
    this.fileService.getImageDetailList();
  }
  save(){
    var name = this.selectedImage.name;
    const fileRef = this.storage.ref(name);
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
          this.fileService.insertImageDetails(`photo_etudiant_${Date.now()}`,this.url);
          alert('Upload Successful');
        })
      })
    ).subscribe();
  }
}

