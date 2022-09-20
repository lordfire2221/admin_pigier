import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {provideFirestore,getFirestore} from '@angular/fire/firestore'
import {provideStorage,getStorage} from '@angular/fire/storage'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule, _MatTableDataSource } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RegisterEtudiantComponent } from './register-etudiant/register-etudiant.component';
import { RegisterParentComponent } from './register-parent/register-parent.component';
import { RegisterProfesseurComponent } from './register-professeur/register-professeur.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterNoteComponent } from './register-note/register-note.component';
import { RegisterBulletinComponent } from './register-bulletin/register-bulletin.component';
import { RegisterProgrammeComponent } from './register-programme/register-programme.component';
import { RegisterEmploiTempsComponent } from './register-emploi-temps/register-emploi-temps.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EtudeComponent } from './etude/etude.component';
import { AdministrationComponent } from './administration/administration.component';
import { SurveillanceComponent } from './surveillance/surveillance.component';
import { ExamenComponent } from './examen/examen.component';
import { DirectionComponent } from './direction/direction.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterFiliereComponent } from './register-filiere/register-filiere.component';
import { ComptableComponent } from './comptable/comptable.component';
import { ScolariteComponent } from './scolarite/scolarite.component';
import { InformatiqueComponent } from './informatique/informatique.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { ListeFiliereComponent } from './liste-filiere/liste-filiere.component';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { ListeParentComponent } from './liste-parent/liste-parent.component';
import { ListeProfesseurComponent } from './liste-professeur/liste-professeur.component';
import { ListeReclammationComponent } from './liste-reclammation/liste-reclammation.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterEtudiantComponent,
    RegisterParentComponent,
    RegisterProfesseurComponent,
    RegisterAdminComponent,
    RegisterNoteComponent,
    RegisterBulletinComponent,
    RegisterProgrammeComponent,
    RegisterEmploiTempsComponent,
    RegisterFiliereComponent,
    HomeComponent,
    LoginComponent,
    EtudeComponent,
    AdministrationComponent,
    SurveillanceComponent,
    ExamenComponent,
    DirectionComponent,
    SidebarComponent,
    RegisterFiliereComponent,
    ComptableComponent,
    ScolariteComponent,
    InformatiqueComponent,
    RendezVousComponent,
    ListeFiliereComponent,
    ListeEtudiantComponent,
    ListeParentComponent,
    ListeProfesseurComponent,
    ListeReclammationComponent,
    ListeAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule,
    RouterLinkActive,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
