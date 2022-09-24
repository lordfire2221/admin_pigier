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
  selector: 'app-register-matiere',
  templateUrl: './register-matiere.component.html',
  styleUrls: ['./register-matiere.component.css']
})
export class RegisterMatiereComponent implements OnInit {
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
      this.registerForm =fb.group({
        nom:'',
        filiere:'',
        niveau:''
      })
    }

  public datas:any[]=[];
  public datas1:any[]=[];
  public dataSource:any;
  navbarClass!:string;
  public disp:string='hide';
  public etudiants:any=<any>{};
  public etudiants1:any=<any>{};


onSubmit(){

}

  ngOnInit(): void {
    this.firebaseService.getNiveaux().subscribe(
      (res:any)=>{
        console.log(res)
        this.datas=res
      }
    )
    console.log(this.datas)

    this.firebaseService.getFilieres().subscribe(
      (result:any)=>{
        console.log(result)
        this.datas1=result
      }
    )
    
  }

}
