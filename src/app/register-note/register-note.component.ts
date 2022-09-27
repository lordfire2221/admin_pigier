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
  selector: 'app-register-note',
  templateUrl: './register-note.component.html',
  styleUrls: ['./register-note.component.css']
})
export class RegisterNoteComponent implements OnInit {
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
        nom:['',[Validators.required,Validators.minLength(1)]],
        prenom:['',[Validators.required,Validators.minLength(1)]],
        Filiere:'',
        niveau:['',[Validators.required,Validators.minLength(1)]],
        matiere:['',[Validators.required,Validators.minLength(1)]],
        note1:['',[Validators.required,Validators.minLength(1)]],
        note2:['',[Validators.required,Validators.minLength(1)]],
        note3:['',[Validators.required,Validators.minLength(1)]],
        note4:['',[Validators.required,Validators.minLength(1)]],
        devoir:['',[Validators.required,Validators.minLength(1)]],
       })
     }
   onSubmit(){
    this.firebaseService.createNote(this.registerForm.value)
    .then(
      (res: any) => {
        if (res)
        this.router.navigate(['listeNote']);
        else
        this.router.navigate(['registerNote']);
      }
    )
   }
   
  public datas:any[]=[];
  public datas1:any[]=[];
  public datas2:any[]=[];
  public dataSource:any;
  navbarClass!:string;
  public disp:string='hide';
  public etudiants:any=<any>{};
  public etudiants1:any=<any>{};

  ngOnInit(): void {
       
    this.firebaseService.getFiliere().subscribe(
      res =>(this.datas = res)
    )
    
        
    this.firebaseService.getNiveau().subscribe(
      res =>(this.datas1 = res)
    )
    this.firebaseService.getMatiere().subscribe(
      res =>(this.datas2=res)
    )
  }

}
