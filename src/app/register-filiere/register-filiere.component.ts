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
  selector: 'app-register-filiere',
  templateUrl: './register-filiere.component.html',
  styleUrls: ['./register-filiere.component.css']
})
export class RegisterFiliereComponent implements OnInit {
  public registerForm!:FormGroup;
  public id!:number;
  public uploadedFiles!:Array<File>;
  nomPhoto!: string;
  selectedImage: any = null;
  url!:string;
  file!:string;
  constructor(private fb:FormBuilder,
    private router:Router,
    private _api:ApiService,
    private route:ActivatedRoute,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public firebaseService:FirebaseService,
    private storage: AngularFireStorage, private fileService: StorageService) {
      this.registerForm = fb.group({
        nom:'',
        abreviation:''
        })
     }
   onSubmit(){
    this.firebaseService.createFiliere(this.registerForm.value)
    .then(
      (res: any) => {
        if (res)
        this.router.navigate(['listeFiliere']);
        else
        this.router.navigate(['registerFiliere']);
      }
    )
   }

  ngOnInit(): void {
  }


}
