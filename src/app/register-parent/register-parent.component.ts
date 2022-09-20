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
  selector: 'app-register-parent',
  templateUrl: './register-parent.component.html',
  styleUrls: ['./register-parent.component.css']
})
export class RegisterParentComponent implements OnInit {
  public registerForm!:FormGroup;
  public uploadedFiles!:Array<File>;
  public password !:string;

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private _api:ApiService,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public firebaseService:FirebaseService,
    private storage: AngularFireStorage, 
    private fileService: StorageService
  ) { 
    this.registerForm = fb.group({
      mail:['', [Validators.required, Validators.email]],
      nom:['',[Validators.required, Validators.minLength(3)]],
      prenom:['', [Validators.required, Validators.minLength(2)]],
      num_whatsapp:['',[Validators.required,Validators.maxLength(15)]],
      num_simple:['',[Validators.required,Validators.maxLength(15)]],      
      nom_etudiant:['',[Validators.required,Validators.minLength(1)]],
      prenom_etudiant:['',[Validators.required,Validators.minLength(1)]],
      filiere:'',
      niveau:['',[Validators.required,Validators.minLength(1)]],
      })

  }

 async onSubmit(){
    const formValue = this.registerForm.value;
    this.password=formValue.nom+formValue.prenom+formValue.niveau;
    try{
      const result = await this.afAuth
      .createUserWithEmailAndPassword(formValue.mail, this.password)
      if(result){
        this.firebaseService.createParent(this.registerForm.value);
        this.router.navigate(['scolarite']);
      };
    }catch(error:any){
      window.alert(error.message);
    }
  }


  ngOnInit(): void {
  }

}
