import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../service/firebase.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-liste-note',
  templateUrl: './liste-note.component.html',
  styleUrls: ['./liste-note.component.css']
})
export class ListeNoteComponent implements OnInit {


  constructor(private firebaseService:FirebaseService,
    private route:ActivatedRoute,
    private router:Router,
    private storage:AngularFireStorage,
    private file:StorageService) { }
  nomRestaurant: any;
  ELEMENT_DATA_Length!: number;
  public datas:any[]=[];
  public dataSource:any;
  navbarClass!:string;
  public disp:string='hide'


  ngOnInit() :void{
    
    this.firebaseService.getNote().subscribe(
      res =>(this.datas = res)
    )
    console.log(this.datas)
  }
  delete(id:number){
    this.firebaseService.deleteFiliere(id)
  }
}
