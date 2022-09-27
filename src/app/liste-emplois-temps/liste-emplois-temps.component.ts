import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../service/firebase.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-liste-emplois-temps',
  templateUrl: './liste-emplois-temps.component.html',
  styleUrls: ['./liste-emplois-temps.component.css']
})
export class ListeEmploisTempsComponent implements OnInit {

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
    
    this.firebaseService.getEmploiTemps().subscribe(
      res =>(this.datas = res)
    )
  }
  delete(id:number){
    this.firebaseService.deleteEmploisTemps(id)
  }
}
