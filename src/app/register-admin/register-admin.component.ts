import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { FirebaseService } from '../service/firebase.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {
  public registerForm!:FormGroup;
  public uploadedFiles!:Array<File>;
  public password!:string;

  constructor(private fb:FormBuilder,
    private router:Router,
    private _api:ApiService,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public firebaseService:FirebaseService,
    private storage: AngularFireStorage, 
    private fileService: StorageService
    ) {
      this.registerForm = fb.group({
      email:['',Validators.required,Validators.email],
      nom:['',Validators.required,Validators.minLength(2)],
      prenom:['',Validators.required,Validators.minLength(2)],
      date_naissance:['',Validators.required,Validators.maxLength(20)],
      service:'',
      numero:['',Validators.required,Validators.maxLength(25)],
      num_what:['',Validators.required,Validators.maxLength(25)]
      })
     }
    
     async onSubmit(){
      const formValue = this.registerForm.value;
      this.password=formValue.nom+formValue.prenom;
      console.log(formValue.email)
      try{
        const result = await this.afAuth
        .createUserWithEmailAndPassword(formValue.email, this.password)
        if(result){
          this.firebaseService.createAdmin(this.registerForm.value);
          this.router.navigate(['informatique']);
        };
      }catch(error:any){
        window.alert(error.message);
      }
      
     }
     
  ngOnInit(): void {
  }

}
