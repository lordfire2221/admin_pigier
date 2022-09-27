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
import { StorageProgrammeService } from '../service/storage-programme.service';

@Component({
  selector: 'app-register-programme',
  templateUrl: './register-programme.component.html',
  styleUrls: ['./register-programme.component.css']
})
export class RegisterProgrammeComponent implements OnInit {
  public ajouterProgramme!:FormGroup;
  public id!:number;
  public uploadedFiles!:Array<File>;
  nomPhoto!: string;
  selectedFiles: FileList | undefined;
  currentFileUpload!: FileUpload;
  percentage!: number;
  constructor(private fb:FormBuilder,
    private router:Router,
    private _api:ApiService,
    private route:ActivatedRoute,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public firebaseService:FirebaseService,
    private storage: AngularFireStorage, 
    private fileService: StorageProgrammeService,
    private uploadService: FileUploadService) { 
      this.ajouterProgramme = fb.group({
        Filiere:'',
        date:['',[Validators.required,Validators.maxLength(50)]],
        niveau:['',[Validators.required,Validators.minLength(0)]]
    })
  }
  
  //
  onSubmit() {
    this.upload(this.ajouterProgramme.value)
    this.router.navigate(['listeProgramme']);

  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(datas: any): void {
    const file = this.selectedFiles!.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file!);
    this.uploadService.pushFileToStorage(this.currentFileUpload, datas, 'programmes').subscribe(
      percentage => {
        this.percentage = Math.round(percentage!);
      },
      error => {
        console.log(error);
      }
    );
    this.ngOnInit()
  }
  public datas:any[]=[];
  public datas1:any[]=[];
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
  }
  

}
