import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { FirebaseService } from '../service/firebase.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-register-professeur',
  templateUrl: './register-professeur.component.html',
  styleUrls: ['./register-professeur.component.css']
})
export class RegisterProfesseurComponent implements OnInit {
  public registerForm!:FormGroup;
  public id!:number;
  public uploadedFiles!:Array<File>;
  public password!:string;
  nomPhoto!: string;

  constructor( private fb:FormBuilder,
    private router:Router,
    private _api:ApiService,
    private route:ActivatedRoute,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public firebaseService:FirebaseService,
    private storage: AngularFireStorage, 
    private fileService: StorageService) {
      this.registerForm = fb.group({
       email:['',[Validators.required,Validators.email]],
       nom:['',[Validators.required,Validators.minLength(1)]],
       prenom:['',[Validators.required,Validators.minLength(1)]],
       numero:['',[Validators.required,Validators.maxLength(50)]],
      })
     }
    async onSubmit(){
      const formValue = this.registerForm.value;
      this.password=formValue.nom+formValue.prenom+formValue.numero;
      try{
        const result = await this.afAuth
        .createUserWithEmailAndPassword(formValue.email, this.password)
        if(result){
          this.firebaseService.createUser(this.registerForm.value);
          this.router.navigate(['LoginEtudiant']);
        };
      }catch(error:any){
        window.alert(error.message);
      }
      
     }

  ngOnInit(): void {
  }

}
