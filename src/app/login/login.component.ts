import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup;
  public errorMessage!:string;
  public isLogin:boolean=false;
  public service:any;
  public datas:any[]=[];
  public dataSource:any;

  constructor(private fb:FormBuilder,
              private userService:AuthService,
              private router:Router,
              public  firebaseservice:FirebaseService,
              public afAuth: AngularFireAuth
              ) { 
    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(4)]]
    })
  } 

  onSubmit(){
    const formValue = this.loginForm.value ;
    return this.afAuth
      .signInWithEmailAndPassword(formValue.email, formValue.password)
      .then((result) => {
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.userService.setDataInLocalStorage('token', JSON.stringify(result));
            this.firebaseservice.getEtudiants(formValue.email).subscribe((res:any)=>{
              this.datas = res.docs[0]._delegate._document.data.value.mapValue.fields.service.stringValue
              console.log(this.datas)
              if(res.docs[0]._delegate._document.data.value.mapValue.fields.service.stringValue == 'examen'){
                this.router.navigate(['examen']);
              }if(res.docs[0]._delegate._document.data.value.mapValue.fields.service.stringValue =='comptable'){
             this.router.navigate(['comptabilite'])
              }if(res.docs[0]._delegate._document.data.value.mapValue.fields.service.stringValue=='surveillance'){
                this.router.navigate(['surveillance'])
              }if(res.docs[0]._delegate._document.data.value.mapValue.fields.service.stringValue=='direction'){
                this.router.navigate(['direction'])
              }if(res.docs[0]._delegate._document.data.value.mapValue.fields.service.stringValue=='scolarite'){
                this.router.navigate(['scolarite'])
              }if(res.docs[0]._delegate._document.data.value.mapValue.fields.service.stringValue=='coordonateur'){
                this.router.navigate(['etude'])
              }if(res.docs[0]._delegate._document.data.value.mapValue.fields.service.stringValue=='informatique'){
                this.router.navigate(['informatique'])
              }if((res.docs[0]._delegate._document.data.value.mapValue.fields.service.stringValue=='')) {
                window.alert("vous n'avez pas de service veillez vous rapprocher du service informatique")
              }
            })
            //   (res:any) =>(this.datas = res))
            // this.router.navigate(['administration']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  public isLogedIn(){
    if(this.userService.getUserDetails() !=null){
      this.isLogin = true
    }
  }

  ngOnInit(): void {
    this.isLogedIn()
  }

}
