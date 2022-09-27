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
  selector: 'app-register-emploi-temps',
  templateUrl: './register-emploi-temps.component.html',
  styleUrls: ['./register-emploi-temps.component.css']
})
export class RegisterEmploiTempsComponent implements OnInit {
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
        matiere:['',[Validators.required,Validators.minLength(1)]],
       date:['',[Validators.required,Validators.minLength(1)]],
       professeur:['',[Validators.required,Validators.minLength(1)]],
       filiere:'',
       niveau:['',[Validators.required,Validators.minLength(1)]],
       mois:['',[Validators.required,Validators.minLength(1)]],
       annee:['',[Validators.required,Validators.maxLength(15)]],
       heure:['',[Validators.required,Validators.maxLength(5)]]
        })
     }
   onSubmit(){
    
    this.firebaseService.createEmploiTemps(this.registerForm.value)
    .then(
      (res: any) => {
        if (res)
        this.router.navigate(['listeEmploisTemps']);
        else
        this.router.navigate(['registerEmploiTemps']);
      }
    )
   }

   public datas:any[]=[];
   public datas1:any[]=[];
   public datas2:any[]=[]
   public dataSource:any;
   navbarClass!:string;
   public disp:string='hide';
   public etudiants:any=<any>{};
   public etudiants1:any=<any>{};
 
 
   ngOnInit(){
     this.firebaseService.getFiliere().subscribe(
       res =>(this.datas = res)
     )
     
         
     this.firebaseService.getNiveau().subscribe(
       res =>(this.datas1 = res)
     )
     this.firebaseService.getMatiere().subscribe(
      res =>(this.datas2 = res)
    )
  }
  
   }
   


