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
import { FileUpload } from '../models/file-upload.model';
import { FileUploadService } from '../service/file-upload.service';

@Component({
  selector: 'app-register-etudiant',
  templateUrl: './register-etudiant.component.html',
  styleUrls: ['./register-etudiant.component.css']
})
export class RegisterEtudiantComponent implements OnInit {
  public ajouterEtudiant!:FormGroup;
  uploadedFiles!: Array<File>;
  nomPhoto!: string;
  selectedFiles: FileList | undefined;
  currentFileUpload!: FileUpload;
  percentage!: number;
password!:string;

  constructor(  private fb:FormBuilder,
    private router:Router,
    private uploadService: FileUploadService,
    private route:ActivatedRoute,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public firebaseService:FirebaseService,
    private storage: AngularFireStorage
    , private fileService: StorageService) {
     this.ajouterEtudiant = fb.group({
      nom_etudiant:['',[Validators.required,Validators.minLength(2)]],
      prenom_etudiant:['',[Validators.required,Validators.minLength(2)]],
      num_etudiant:['',[Validators.required,Validators.maxLength(15)]],
      email:['',[Validators.required,Validators.email]],
      date_naissance:'',
      date_inscription:'',
      Filiere:'',
      an_uinver:['',[Validators.required,Validators.maxLength(12)]],
      niv_universitaire:'',
      role:'etudiant',
     })
   }
  
  
  
  
  
  async onSubmit() {
    
    this.password =this.ajouterEtudiant.value.nom_etudiant+this.ajouterEtudiant.value.prenom_etudiant
    const formValue = this.ajouterEtudiant.value;

    try {
      const result = await this.afAuth
        .createUserWithEmailAndPassword(formValue.email, this.password)
        if(result){
          this.upload(this.ajouterEtudiant.value)
          this.router.navigate(['scolarite']);
        };
    } catch (error:any) {
      window.alert(error.message);
    }
   /* this.ajouterEtudiant.value.password=this.ajouterEtudiant.value.nom_etudiant+this.ajouterEtudiant.value.prenom_etudiant
    this.upload(this.ajouterEtudiant.value)*/
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(datas: any): void {
    const file = this.selectedFiles!.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file!);
    this.uploadService.pushFileToStorage(this.currentFileUpload, datas, 'etudiants').subscribe(
      percentage => {
        this.percentage = Math.round(percentage!);
      },
      error => {
        console.log(error);
      }
    );
    this.ngOnInit()
  }
  ngOnInit(){
  } 
  
  
}
  
  
  
   /*showPreview(event: any) {
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
  }*/


