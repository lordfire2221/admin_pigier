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
  selector: 'app-register-niveau',
  templateUrl: './register-niveau.component.html',
  styleUrls: ['./register-niveau.component.css']
})
export class RegisterNiveauComponent implements OnInit {
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
        nom:''
      })
     }
     onSubmit(){
      this.firebaseService.createNiveau(this.registerForm.value)
      .then(
        (res: any) => {
          if (res)
          this.router.navigate(['listeNiveau']);
          else
          this.router.navigate(['registerNiveau']);
        }
      )
     }

  ngOnInit(): void {
  }

}
